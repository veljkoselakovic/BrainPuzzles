<template>
    <header><HeaderComponent/></header>

    <div class="div3">

    <div class="div"><MozgicCanvasComponent></MozgicCanvasComponent></div>
    <div class="div"><MozgicCanvasComponent></MozgicCanvasComponent></div>

    <div class="div"><div class="canvas" id="forClicking">
        <img class="simbol" id="1" src="./igramozgic.jpg" alt="mozgicsimb" style="width:4.68vw" @click = "symbolClicked">
        <br>
        <img class="simbol" id="2" src="./zvezda.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="3" src="./tref.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="4" src="./pik.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="5" src="./herc.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="6" src="./karo.jpg" alt="mozgicsimb" style="width:2.8vw" @click = "symbolClicked">
    </div></div>

    </div>

    <br>

    <div class="div2">

    <div class="div1"><MozgicItem></MozgicItem></div>
    <div class="div1"><FancyButton style="width:25vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Submit"></FancyButton></div>
    <div class="div1"><FancyButton style="width:9.375vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Back"></FancyButton></div>
    </div>

    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from '../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../BasicComponents/HeaderComponent.vue'
import MozgicCanvasComponent from './MozgicCanvasComponent.vue'
import MozgicItem from './MozgicItem.vue'
import FancyButton from '../BasicComponents/FancyButton.vue'

export default {
    components :{FooterComponent, HeaderComponent, MozgicCanvasComponent, FancyButton, MozgicItem},
    name: 'MozgicComponent',

    methods:
    {
        symbolClicked: function(event){
            let p = event.target.id;
            alert(p);
            //if(p==1) {
              //  let r 
                //r.value1=false; r.value2=true;
            //}
            
        }
    }
}
</script>

<style scoped>

footer {
    margin-top:2%;
}

header {
    margin-top:-3%;
}
.div{
     display: inline-block;
     margin: 0.4% 0.8%;
     
}

.div1{
    display:inline-block;
    margin-top: 3.96vh;
}

.div2{
    display:flex;
    justify-content: flex-center;
    margin-left:3.125vw;
}
.div3{
    display:flex;
    justify-content: flex-center;
    margin-left:6.25vw;
}

#forClicking{
    position:relative;
    z-index: 1;
    margin: 0 auto;
    margin-top:2.64vh;
    width: 6.25vw;
    height: 49.27vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;

  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}

.simbol{
    width: 3.125vw;
    //height: 80px;
}


</style>