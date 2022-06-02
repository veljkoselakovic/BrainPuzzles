<template>
    <header><HeaderComponent/></header>
    <div class="div">
       <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="div canv">
        <h1>New admin</h1>
        <form method="post">
            <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf">
            <InputField style="margin-top:5%" text = "Username" type="text" name="user" />
            <FancyButton style="margin-top:40%" text="Submit" />
        </form>
    </div>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent          from './BasicComponents/FooterComponent.vue'
import HeaderComponent          from './BasicComponents/HeaderComponent.vue'
import FancyText                from './BasicComponents/FancyText.vue'
import InputField               from './BasicComponents/InputField.vue'
import FancyButton              from './BasicComponents/FancyButton.vue'
import ProfileCanvasComponent   from './CanvasComponents/ProfileCanvasComponent.vue'

export default {
    components: {FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, InputField, FancyButton},
    name: 'AddAdminComponent',
    
    mounted() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent)
        this.usernameGreeting += this.tableData.user + "!"
    },

    data()  {
        var cookies = document.cookie
        var csrf_token
        if(cookies == null || cookies == ""){
        csrf_token = ""
        }
        else{
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
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}

</style>