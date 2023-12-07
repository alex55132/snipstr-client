<script setup lang="ts">
import { Constants } from '@/constants';
import { reactive, ref } from 'vue';
import {LoadScreenState} from '../assets/scripts/loadScreenState'


defineProps<{
    showPassInput?: boolean
}>()

const snippetText = ref('')
const snippetPass = ref('')

const state = reactive({
    snippetTextAreaPlaceholder: "Snippet text would go here. 240 characters max",
    passTextAreaPlaceholder: "Snippet pass would go here. 128 characters max",
    snippetTextName: "snippet",
    snippetPassName: "pass"
})

const emit = defineEmits(['isCreated'])

function submitSnippet(event: Event) {
    event.preventDefault();

    LoadScreenState.show()

    fetch(`${Constants.MAIN_URL}/snippet`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: snippetText.value,
            pass: snippetPass.value
        })
    }).then(async (res) => {
        const responseData = await res.json();
        emit('isCreated', responseData["snippet"])
        LoadScreenState.hide()
    })
}

</script>

<template>
    <main class="snippetContainer">
        <form @submit="submitSnippet">
            <textarea v-model="snippetText" :placeholder="state.snippetTextAreaPlaceholder" :maxlength="240" rows="20" cols="100" :name="state.snippetTextName"></textarea>
            <textarea v-if="showPassInput" v-model="snippetPass" :placeholder="state.passTextAreaPlaceholder" :maxlength="128" rows="1" cols="100" :name="state.snippetPassName"></textarea>
            <div class="submitBtnHolder">
                <input class="mainButton" type="submit" value="Create"/>
            </div>
        </form>
    </main>
</template>

<style>

.snippetContainer {

    min-height: 40%;
    height: auto;
    width: 100%;
}

.snippetContainer form textarea {
    resize: none;
    width: 100%;
    margin-bottom: 1%;
    font-family: 'Kulim Park';
}

.submitBtnHolder {
    display: flex;
    flex-direction: row-reverse;
}

.submitBtnHolder input {
    width: 150px;
}

</style>