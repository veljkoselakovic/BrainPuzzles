<template>
        <div class="canv">
            <p class="h" >
                Username  <span class="hs">Highscore</span>
            </p>
            <p class="left" v-for="(elem, index) in niz"  v-bind:key="elem">
                {{index+1}}. {{elem.split(',')[0]}} 
                <span class="right">{{elem.split(',')[1]}}</span>
            </p>
        </div>
</template>

<script>
export default {
    name:'RankingCanvasComponent',
    props:[
        'niz'
    ]
}
</script>

<style scoped>
.canv {
 position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 45vw;
    height: 45vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);

    margin-bottom: 2%;
}
.h {
    margin-left: 23%;
    margin-right: 23%;
    margin-top: 5%;
    margin-bottom: 1%;
    font-size: 1.5em;
    font-weight: bold;
    text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);
}
.hs {
    float:right;
}
.left{
    text-align:left;
    margin-left: 23%;
    margin-right: 23%;
    margin-bottom: 0.5%;
    margin-top: 0.5%;
    font-size: 0.85em;
    font-weight: bold;
}
.right {
    float:right;
}
</style>