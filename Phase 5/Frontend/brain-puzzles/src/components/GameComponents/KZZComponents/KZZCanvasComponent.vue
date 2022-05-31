<template>
    <div class="kzzCanvas">
        <InputField id="kzzAnswer" type="text" text="Answer" style="margin-top: 2%"></InputField>
        <FancyButton text="Enter" @click="submitAnswer($event)"></FancyButton>
    </div>
</template>

<script>
import FancyButton from '../../BasicComponents/FancyButton.vue'
import InputField from '../../BasicComponents/InputField.vue'

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    components: {FancyButton, InputField},
    name: 'KZZCanvas',
    methods: {
        submitAnswer(event) {
            event.preventDefault();

            this.$parent.submitAnswer(document.getElementById("kzzAnswer").firstChild.value);
            
            document.getElementById("fightListGuess").firstChild.value = "";
        }
    }
}
</script>

<style scoped>
.kzzCanvas {
    position:relative;

    z-index: 1;

    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 2%;
    
    padding: 2vw;

    width: 46vw;
    height: 15vh; 

    background-color: white;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 2em;
    overflow: hidden;
}
</style>