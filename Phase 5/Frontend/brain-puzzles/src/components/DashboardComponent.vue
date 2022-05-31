<template>
    <header><HeaderComponent/></header>
    <div class="div leftPanel">
        <FancyText class="helloUserClass" width=22vw height=5vh :text="this.usernameGreeting" fontSize=1.3em></FancyText>
        <br>
        <ProfileCanvasComponent id="profComp" :username="this.tableData.user" :email="this.tableData.email" :status="this.tableData.status"
        :aboutMe="this.tableData.opis" totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>
    </div>   
    <div class="div">
        <GameCanvasComponent v-if="this.loaded" gameLocation="/fightlist" game="Fight list" :score="this.points[0]" :disabled="!flAble" ></GameCanvasComponent>
    </div> 
    <div class="div">
        <GameCanvasComponent v-if="this.loaded" gameLocation="/mozgic" game="Mozgic" :score="this.points[1]" :disabled="!mozgicAble"></GameCanvasComponent>
    </div> 
    <div class="div">
        <GameCanvasComponent v-if="this.loaded" gameLocation="/kzz" game="Ko zna zna" :score="this.points[2]" :disabled="!kzzAble"></GameCanvasComponent>
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
            flAble : false,
            mozgicAble : false,
            kzzAble : false,
            points: [],
            loaded: false,
        }
    },
    
    beforeMount() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent)
        this.usernameGreeting += this.tableData.user + "!"
        console.log(this.tableData.user)
        let status = this.tableData.status;
        console.log(status);
        if(status == 'b'){
            this.flAble = true;
        }else if(status == 's'){
            this.flAble = true; this.mozgicAble = true;
        }else if(status == 'z'){
            this.flAble = true; this.mozgicAble = true; this.kzzAble = true;
        }
        this.points[0] = parseInt(this.tableData['flRez'])
        this.points[1] = parseInt(this.tableData['mRez'])
        this.points[2] = parseInt(this.tableData['kzzRez'])

        if(this.tableData['flRez'] !== null && this.tableData['flRez'] !== undefined) 
            { this.flAble=false;  }
        else this.points[0] = 0;

        if(this.tableData['kzzRez'] !== null && this.tableData['flRez'] !== undefined) 
        { this.kzzAble=false; }
        else this.points[2] = 0;

        if(this.tableData['mRez'] !== null && this.tableData['flRez'] !== undefined) { this.mozgicAble=false; }
        else this.points[1] = 0;

        if(isNaN(this.points[0]) || isNaN(this.points[1]) || isNaN(this.points[2]))
            this.points[0] = this.points[1] = this.points[2] = 0;
        console.log(this.tableData['flRez'])
        this.loaded = true;

        //@TODO if everythin -> submit

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