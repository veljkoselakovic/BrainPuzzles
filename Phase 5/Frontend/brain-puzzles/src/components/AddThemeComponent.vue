<template>
    <header><HeaderComponent/></header>
    <div class="divv">
        <FancyText width=250px height=3.5vw text='Hello Iva!' fontSize=25px></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
        aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="divv canvv">
        <h1>New theme</h1>
        <InputField style="margin-top:5%" text = "Theme name" type="text" name="themeName" />
        <InputField style="margin-top:1%" text = "1pt answers" type="text" name="onePoint" />
        <InputField style="margin-top:1%" text = "2pt answers" type="text" name="twoPoints" />
        <InputField style="margin-top:1%" text = "3pt answers" type="text" name="threePoints" />
        <div style="font: 100px" id="txtt">*All answers should be delimited with a semicolon (;)</div>
        <FancyButton style="margin-top:12%" text="Submit" />
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
    name: 'AddThemeComponent'
}
</script>


<style scoped>
.divv{
     display: inline-block;
     margin: 0.8%;
}
.canvv {
    position:relative;
    /* z-index: 1; */
    margin: 0 auto;
    width: 650px;
    height: 470px; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    margin-left: 1%;

    font: 100px;
    font-weight: 100;
}
#txtt{
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.25);
    font: 100px;
}

</style>