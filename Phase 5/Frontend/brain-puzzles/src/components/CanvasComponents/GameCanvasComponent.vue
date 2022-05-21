<template>
    <div class="canvas">
        <div id="game"> {{game}} </div>
        <div class="space"></div>
        <div id="score">
            <div style="font-size: 16px;">Score: </div>
            {{score}}
        </div>
        <div id="but">
            <FancyButton text="PLAY"></FancyButton>
        </div>
    </div>
</template>

<GameCanvasComponent game="Fight list" score="25"></GameCanvasComponent>
<br><br><br> 

<script>
 import FancyButton from '../BasicComponents/FancyButton.vue'

export default {
    components :{FancyButton},
    name: 'GameCanvasComponent', 
    props:[
        'game', 'score'
    ]
}
</script>



<style scoped>
.canvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 200px;
    height: 450px; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
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