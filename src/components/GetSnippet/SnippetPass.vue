<script setup lang="ts">
import { Constants } from '@/constants';
import { ref } from 'vue';
import {LoadScreenState} from '../../assets/scripts/loadScreenState'


const isHidden = ref(false)
const snippetPassword = ref(undefined);
const props = defineProps<{
    snippetId: string
}>()


const emit = defineEmits(['snippetUnlocked'])


function getAndValidateSnippet() {
    let url = `${Constants.MAIN_URL}/snippet/${props.snippetId}`

    LoadScreenState.show()
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pass: snippetPassword.value
        })
    }).then(async (res) => {
        const responseData = await res.json();
        emit('snippetUnlocked', responseData["content"])
        isHidden.value = true;
    }).catch(() => {
        alert("Invalid password")
    }).finally(() => {
        LoadScreenState.hide()
    })
}


</script>

<template>
    <div class="popupContainer" :class="{hidden: isHidden}">
        <div class="popupContent">
            <h1>Snippet protected</h1>
            <div class="snippetContent">
                <p>Enter the password</p>
                <input type="password" v-model="snippetPassword" placeholder="Insert the password here">
            </div>
            <button class="mainButton" @click="getAndValidateSnippet">Open</button>
        </div>
    </div>
</template>

<style>

.successContent button {
    width: 15%;
}

.snippetContent {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
}

.snippetContent input {
    width: 100%;
    font-family: 'Kulim Park';
    height: 35px;
}

.hidden {
  display: none;
}

</style>