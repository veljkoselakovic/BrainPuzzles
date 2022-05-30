<template>
    <div class="kzzCanvas">
        <div class="kzzItem">
            <InputField type="text" text="Answer" style="margin-top: 2%"></InputField>
        </div>
        <div class="kzzItem">
            <FancyButton text="Enter"></FancyButton>
        </div>
    </div>
</template>

<script>
import FancyButton from '../../BasicComponents/FancyButton.vue'
import InputField from '../../BasicComponents/InputField.vue'

export default {
    components: {FancyButton, InputField},
    name: 'KZZCanvas'
}
</script>

<style scoped>
.kzzCanvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 46vw;
    height: 15vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 2%;
    margin-top: 2%;
    padding: 2vw;
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.kzzItem {
    display: inline-block;
    width: 50%;
    height: 50%
}
</style>