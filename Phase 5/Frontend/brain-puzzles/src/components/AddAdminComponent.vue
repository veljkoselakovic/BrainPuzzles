<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText  width=22vw height=3vw text='Hello Iva!' fontSize=25px></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
        aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="div canv">
        <h1>New admin</h1>
        <InputField style="margin-top:5%" text = "Username" type="text" name="user" />
        <FancyButton style="margin-top:40%" text="Submit" />
    </div>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent from './CanvasComponents/ProfileCanvasComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'
import InputField from './BasicComponents/InputField.vue'
import FancyButton from './BasicComponents/FancyButton.vue'

export default {
    components: {FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, InputField, FancyButton},
    name: 'MainScreenComponent'
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
    width:  42.3vw;
    height: 65.1vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    margin-left: 1%;

    font: 1.3em;
    font-weight: 100;
}

</style>