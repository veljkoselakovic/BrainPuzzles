<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
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
    name: 'AddQuestionComponent',
    data(){
        return {
            tableData: {},
            usernameGreeting: "Hello, ",
        }
    },
    
    mounted() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent)
        this.usernameGreeting += this.tableData.user + "!"
        console.log(this.tableData.user)
    },
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

    font: 100px;
    font-weight: 100;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
#txt{
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.25);
    font: 100px;
}

</style>