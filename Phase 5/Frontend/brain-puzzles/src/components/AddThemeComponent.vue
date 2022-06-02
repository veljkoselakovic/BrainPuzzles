<template>
    <header><HeaderComponent/></header>
    <div class="divv">
        <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="divv canvv">
        <h1>New theme</h1>
        <form method="post">
            <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf">
            <InputField style="margin-top:5%" text = "Theme name" type="text" name="themeName" />
            <InputField style="margin-top:1%" text = "1pt answers" type="text" name="onePoint" />
            <InputField style="margin-top:1%" text = "2pt answers" type="text" name="twoPoints" />
            <InputField style="margin-top:1%" text = "3pt answers" type="text" name="threePoints" />
            <div id="txtt">*All answers should be delimited with a semicolon (;)</div>
            <FancyButton style="margin-top:12%" text="Submit" />
        </form>
    </div>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent          from './BasicComponents/FooterComponent.vue'
import HeaderComponent          from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent   from './CanvasComponents/ProfileCanvasComponent.vue'
import FancyText                from './BasicComponents/FancyText.vue'
import InputField               from './BasicComponents/InputField.vue'
import FancyButton              from './BasicComponents/FancyButton.vue'

export default {
    components: {FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, InputField, FancyButton},
    name: 'AddThemeComponent',
    
    mounted() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent)
        this.usernameGreeting += this.tableData.user + "!"
    },

    data()  {
        var cookies = document.cookie
        var csrf_token

        if (cookies == null || cookies == "") {
            csrf_token = ""
        }
        else {
            csrf_token =document.cookie.split('; ')
                .find(row => row.startsWith('csrftoken'))
                .split('=')[1]
        }

        return {
            csrf: csrf_token,
            tableData: {},
            usernameGreeting: "Hello, ",
        }
    }
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
    width:  42.3vw;
    height: 65.1vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    margin-left: 1%;

    font: 30px;
    font-weight: 100;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
#txtt{
    margin-top: 2%;
    color: rgba(0, 0, 0, 0.25);
    font: 10% !important;
}

</style> 