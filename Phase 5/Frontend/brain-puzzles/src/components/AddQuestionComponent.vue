<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText width=250px height=3.5vw text='Hello Iva!' fontSize=25px></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
        aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="div canv">
        <h1>New question</h1>
        <InputField style="margin-top:5%" text = "Question text" type="text" name="question" />
        <InputField style="margin-top:1%" text = "Answer" type="text" name="answer" />
    
        <FancyButton style="margin-top:32%" text="Submit" />
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
    name: 'AddQuestionComponent'
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

    font: 100px;
    font-weight: 100;
}
#txt{
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.25);
    font: 100px;
}

</style>