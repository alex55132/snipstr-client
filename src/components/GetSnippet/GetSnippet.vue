<script setup lang="ts">
import HeadingName from '../HeadingName.vue';
import SnippetPass from './SnippetPass.vue';
import SnippetDisplay from '../SnippetDisplay.vue';
import AboutUs from '../AboutUs.vue';
import Footer from '../Footer.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let snippetId = ref('');
let snippetContentRef = ref('')

const route = useRoute()

onMounted(() => {
  snippetId.value = route.params["id"] as string
})

let snippetDisplayRef = ref<InstanceType<typeof SnippetDisplay> | null>(null)

function unlockSnippetContent(content: string) {
    snippetContentRef.value = content
    console.log(`Snippet content ${snippetContentRef.value}`)
}


</script>

<template>
  <HeadingName></HeadingName>

  <SnippetDisplay class="snippetDisplay" :snippet="snippetContentRef" ref="snippetDisplayRef"></SnippetDisplay>

  <SnippetPass @snippetUnlocked="unlockSnippetContent" :snippetId="snippetId"></SnippetPass>

  <hr class="separator">

  <AboutUs></AboutUs>
  <Footer></Footer> 
</template>

<style>

.separator {
    width: 90%;
    height: 3px;
    border: 1px solid rgba(60, 60, 60, 0.66);
    background-color: rgba(60, 60, 60, 0.66);
    margin: 20px;
}

.snippetDisplay {
  margin-top: 15px;
}


</style>
