<script setup lang="ts">
</script>

<template>
    <div class="aboutUsContainer">
        <h1>What is Snipstr</h1>
        <div class="aboutUsText">
            <p>Snipstr is a selfhosted solution that allows you to share strings 
            between multiple computers easily by generating a link where you 
            can see the snippet</p>
            <p>Note that every snippet is encrypted when sending it to the backend,
                wether with your password or without it.
            </p>
            <button class="mainButton">Buy me a coffee</button>
        </div>
    </div>
    

</template>

<style>

.aboutUsContainer {

    display: flex;
    flex-direction: column;

}

.aboutUsText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
}

.aboutUsText button {
    width: 30%;
    height: 35px;


    margin-top: 10px;
}

</style>