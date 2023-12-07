<script setup lang="ts">

import {LoadScreenState} from '../assets/scripts/loadScreenState'


</script>

<template>
  <div class="loadScreen" :class="{hide: !LoadScreenState.isShown}">
        <img src="../assets/loader.svg">
  </div>
</template>

<style>

.loadScreen {
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(40, 40, 40, 0.71);
}

.hide {
    display: none;
}

</style>