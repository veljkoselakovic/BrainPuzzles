<template>
    <header><HeaderComponent/></header>
    <div id="cont">
        <div id="left">
             <FancyText width=20% height=3.5vw text='Hello Iva!' fontSize=25px></FancyText>
            <br>
            <ProfileCanvasComponent username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
            aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
        </div>   
       
    </div>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent from './CanvasComponents/ProfileCanvasComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'

export default {
    components :{FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText},
    name: 'DashboardComponent'
}
</script>

<style scoped>
#cont{
    margin: 1%;
}
</style>