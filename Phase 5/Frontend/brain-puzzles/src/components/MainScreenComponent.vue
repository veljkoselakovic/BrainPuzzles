<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText width=250px height=3.5vw text='Hello Iva!' fontSize=25px></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
        aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="div canv">
        <FancyButton @click="startClicked()" style="height: 80px; margin-top : 5%;" text="START" />
        <FancyButton @click="rankingsClicked()" style="transform: scale(0.8); margin-top : 10%;" text="Rankings" />
        <FancyButton @click="newQuestionClicked()" style="transform: scale(0.8); margin-top : 0%;" text="New question" />
        <FancyButton @click="newThemeClicked()" style="transform: scale(0.8); margin-top : 0%;" text="New theme" />
        <FancyButton @click="newAdminClicked()" style="transform: scale(0.8); margin-top : 0%;" text="New admin" />
    </div>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent from './CanvasComponents/ProfileCanvasComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'
import FancyButton from './BasicComponents/FancyButton.vue'

export default {
    components: {FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, FancyButton},
    name: 'MainScreenComponent',
    methods:
    {
        startClicked() {
            location.href = "/dashboard"
        },
        rankingsClicked() {
            location.href = "/ranking"
        },
        newQuestionClicked() {
            location.href = "/addquestion"
        },
        newThemeClicked() {
            location.href = "/addtheme"
        },
        newAdminClicked() {
            location.href = "/addadmin"
        },
    }
}
</script>


<style scoped>

.div{
     display: inline-block;
     margin: 0.8%;
}
.canv {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 650px;
    height: 470px; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    margin-left: 1%;

    font: 25px;
}

</style>