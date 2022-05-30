<template>
    <header><HeaderComponent/></header>
    <div class="div leftPanel">
        <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>   
    <div class="div">
        <GameCanvasComponent game="Fight list" score="25"  ></GameCanvasComponent>
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
    name: 'DashboardComponent',
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
.leftPanel{
    height:45vh;
}

</style>