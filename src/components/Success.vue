<script setup lang="ts">
import { ref } from 'vue';

const isHidden = ref(true)
const snippetValue = ref('This is the snippet link')

const show = (snippetLink: string) => {
    isHidden.value = false
    snippetValue.value = snippetLink
}

function close() {
    isHidden.value = true
}

defineExpose({
    show
})

</script>

<template>
    <div class="popupContainer" :class="{hidden: isHidden}">
        <div class="popupContent">
            <h1>Snippet created</h1>
            <div class="snippetContent">
                <p>Share this link to access your snippet</p>
                <input :value="snippetValue" :readonly="true">
            </div>
            <button class="mainButton" @click="close">Close</button>
        </div>
    </div>
</template>

<style>

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