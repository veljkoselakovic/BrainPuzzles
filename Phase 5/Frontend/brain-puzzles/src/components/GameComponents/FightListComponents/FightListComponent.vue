<template>
    <HeaderComponent/>
    <div class="fightListDiv">
        <div>
            <div>
                <FancyText style="margin-top: 2%" width=50vw height=10vh :text="this.themeName" fontSize=36px></FancyText>
            </div>
            <FightListCanvas :themeId="this.themeId"></FightListCanvas>
        </div>
        <div class="timer">
            {{this.timerCount}}s
        </div>
    </div>
    <FooterComponent/>
 <!-- <FightListItem text=Toyota points=0> -->
</template>

<script>
import FooterComponent from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../../BasicComponents/HeaderComponent.vue'
import FancyText from '../../BasicComponents/FancyText.vue'
import FightListCanvas from './FightListCanvas.vue'

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export default {
    components: {FooterComponent, HeaderComponent, FightListCanvas, FancyText},
    name: 'FightListComponent',
    data() {
        return {
            themeName: "",
            themeId: -1,
            tableData: {},
            timerCount: 30,
        }
    },
    // props: [
    //     'themeId', 'themeName'
    // ]
    mounted() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent);
        this.themeName += this.tableData.themeName;
        this.themeId = this.tableData.themeId;
    },
    methods: {
        submitResults() {
            axios.post('/fightlist_end', {}).then(() => {
                console.log('logged')
                location.href = "/dashboard"
            })

        }
    },
    watch: {
        timerCount: {
            handler(value){
                if(value > 0){
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
                else{
                    this.submitResults();
                }
            }, immediate:true
        }
    }
}
</script>

<style scoped>
.fightListDiv{
    display: flex;
    justify-content: space-evenly;
}
.timer {
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
}
</style>