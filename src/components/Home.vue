<script setup lang="ts">
import HeadingName from './HeadingName.vue';
import Success from './Success.vue';
import SnippetCreate from './SnippetCreate.vue';
import AboutUs from './AboutUs.vue';
import Footer from './Footer.vue';
import { ref } from 'vue';
import LoadScreen from './LoadScreen.vue';



const successComponent = ref<InstanceType<typeof Success> | null>(null)

function showSuccess(snippetLink: string) {
  successComponent.value?.show(snippetLink)
}


</script>

<template>

  <LoadScreen></LoadScreen>

  <HeadingName></HeadingName>

  <SnippetCreate class="snippetCreator" :showPassInput="true" @isCreated="showSuccess"></SnippetCreate>

  <Success ref="successComponent"></Success>

  <hr class="separator">

  <AboutUs></AboutUs>
  <Footer></Footer>
</template>

<style>

.separator {
    width: 90%;
    height: 2px;
    border: 1px solid rgba(60, 60, 60, 0.66);
    background-color: rgba(60, 60, 60, 0.66);
    margin: 20px;
}

.snippetCreator {
  margin-top: 15px;
}

</style>