<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText width=250px height=3.5vw text='Hello Iva!' fontSize=25px></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
        aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>   
    <div class="div">
        <GameCanvasComponent game="Fight list" score="25"></GameCanvasComponent>
    </div> 
    <div class="div">
        <GameCanvasComponent game="Mozgic" score="20"></GameCanvasComponent>
    </div> 
    <div class="div">
        <GameCanvasComponent game="Ko zna zna" score="15"></GameCanvasComponent>
    </div> 
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent from './CanvasComponents/ProfileCanvasComponent.vue'
import GameCanvasComponent from './CanvasComponents/GameCanvasComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'

export default {
    components :{FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, GameCanvasComponent},
    name: 'DashboardComponent'
}
</script>

<style scoped>

.div{
     display: inline-block;
     margin: 0.8%;
}

</style>