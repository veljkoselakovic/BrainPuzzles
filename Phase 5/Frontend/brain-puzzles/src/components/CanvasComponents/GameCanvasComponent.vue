<template>
    <div class="canvas" :class="{disabled:disabled, abled:!disabled}">
        <div id="game"> {{game}} </div>
        <div class="space"></div>
        <div id="score">
            <div style="font-size: 16px;">Score: </div>
            {{score}}
        </div>
        <div id="but">
            <FancyButton  @click="playFL($event)" class="playButton" text="       PLAY       " :disabled="disabled"></FancyButton>
        </div>
    </div>
</template>


<script>
import FancyButton from '../BasicComponents/FancyButton.vue'

export default {
    components :{FancyButton},
    name: 'GameCanvasComponent', 
    props:[
        'game', 'score', 'disabled'
    ],
    methods: {
        playFL(event) {
            event.preventDefault();
            window.location.href = "/fightlist";
        },
    }
}
</script>

<style scoped>
.disabled{
    background-color: gray;
}
.abled{
    background-color: white;
}
.canvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 15vw;
    height: 65vh; 
    border-radius: 2em;
    overflow: hidden;

  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);

}
#game{
    text-align: center;
    color: rgba(0, 0, 0, 0.751);
    font-size: 25px;
    font-weight: 700;
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 8%;
}
.space{
    height:30%;
}
#score{
    text-align: center;
    color: rgba(0, 0, 0, 0.751);
    font-size: 27px;
    font-weight: 550;
    height: 42%;
}

</style>