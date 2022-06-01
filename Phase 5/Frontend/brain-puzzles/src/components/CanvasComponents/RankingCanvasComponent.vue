<template>
        <div class="canv">
            <p class="h" >
                Username  <span class="hs">Highscore</span>
            </p>
            <!-- <p v-for="elem in niz"  v-bind:key="elem.id"></p> -->

            <p class="left" > 1. {{niz[0]}}  <span class="right">{{niz[10]}}</span></p>
            <p class="left" > 2. {{niz[1]}}  <span class="right">{{niz[11]}}</span></p>
            <p class="left" > 3. {{niz[2]}}  <span class="right">{{niz[12]}}</span></p>
            <p class="left" > 4. {{niz[3]}}  <span class="right">{{niz[13]}}</span></p>
            <p class="left" > 5. {{niz[4]}}  <span class="right">{{niz[14]}}</span></p>
            <p class="left" > 6. {{niz[5]}}  <span class="right">{{niz[15]}}</span></p>
            <p class="left" > 7. {{niz[6]}}  <span class="right">{{niz[16]}}</span></p>
            <p class="left" > 8. {{niz[7]}}  <span class="right">{{niz[17]}}</span></p>
            <p class="left" > 9. {{niz[8]}}  <span class="right">{{niz[18]}}</span></p>
            <p class="left" > 10. {{niz[9]}}  <span class="right">{{niz[19]}}</span></p>
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
.h{
    margin-left: 23%;
    margin-right: 23%;
    margin-top: 5%;
    margin-bottom: 1%;
    font-size: 1.5em;
    font-weight: bold;
    text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);
}
.hs{
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
.right{
    float:right;
}
</style>