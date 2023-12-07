<script setup lang="ts">
import { Constants } from '@/constants';
import { reactive } from 'vue';

const props = defineProps<{
    snippet: string
}>()


const state = reactive({
    snippetTextAreaPlaceholder: "Snippet text would go here. 240 characters max",
    snippetTextName: "snippet",
})



</script>

<template>
    <main class="snippetContainer">
        <form @submit.prevent="">
            <textarea disabled v-model="$props.snippet" :placeholder="state.snippetTextAreaPlaceholder" :maxlength="240" rows="20" cols="100" :name="state.snippetTextName"></textarea>
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