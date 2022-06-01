<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>
    <div class="div canv">
        <router-link to="/dashboard">
            <FancyButton @click= "startGame" style="height: 80px; margin-top : 5%;" text="START" />
        </router-link>
        <router-link to="/ranking">
            <FancyButton style="transform: scale(0.8); margin-top : 10%;" text="Rankings" />
        </router-link>
        <router-link :class="{sakrij: !isAdmin}" to="/addquestion">
            <FancyButton style="transform: scale(0.8); margin-top : 0%;" text="New question" />
        </router-link>
        <router-link :class="{sakrij: !isAdmin}" to="/addtheme">
            <FancyButton style="transform: scale(0.8); margin-top : 0%;" text="New theme" />
        </router-link>
        <router-link :class="{sakrij: !isAdmin}" to="/addadmin">
            <FancyButton style="transform: scale(0.8); margin-top : 0%;" text="New admin" />
        </router-link>
    </div>
    <br>
    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import ProfileCanvasComponent from './CanvasComponents/ProfileCanvasComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'
import FancyButton from './BasicComponents/FancyButton.vue'
import axios from "axios";

export default {
    components: {FooterComponent, HeaderComponent, ProfileCanvasComponent, FancyText, FancyButton},
    name: 'MainScreenComponent',
    data(){
        return {
            tableData: {},
            usernameGreeting: "Hello, ",
            isAdmin:false
        }
    },

    mounted() {
        axios.get('/mainscreenInfo').then((response) => {
            this.tableData = response.data
            this.usernameGreeting += this.tableData.user + "!"
            this.isAdmin = this.tableData.isAdmin
            console.log(this.tableData.user)
            console.log("da li je admin: " + this.isAdmin)
        })
    },
}
</script>


<style scoped>

.sakrij{
    visibility: hidden;
}
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

    font: 1.6vw;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}

</style>