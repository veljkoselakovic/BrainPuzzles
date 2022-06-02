<template>
    <HeaderComponent/>
    <div class="fightListDiv">
        <div>
            <FancyText style="margin-top: 2%" width=50vw height=10vh :text="this.themeName" fontSize=36px></FancyText>
            <div class="fightListTop">
                <div class="numbers">
                    {{this.timerCount}}s
                </div>
                <div class="numbers">
                    {{this.points}}p
                </div>
            </div>
            <FightListCanvas :themeId="this.themeId"></FightListCanvas>
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent  from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent  from '../../BasicComponents/HeaderComponent.vue'
import FancyText        from '../../BasicComponents/FancyText.vue'
import FightListCanvas  from './FightListCanvas.vue'

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
            points: 0,
            timerHandler: null
        }
    },
    mounted() {
        this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent);
        this.themeName += this.tableData.themeName;
        this.themeId = this.tableData.themeId;
        this.timerHandler = setInterval(this.timer, 1000);
    },
    methods: {
        submitResults() {
            axios.post('/fightlist_end', {}).then(() => {
                location.href = "/dashboard"
            })
        },
        timer() {
            if(--this.timerCount == 0) {
                this.submitResults();
            }
        }
    }
}
</script>

<style scoped>
.fightListDiv{
    display: flex;
    justify-content: space-evenly;
}
.fightListTop {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position:relative;

    width: 50vw;
    height: 8vh;
    
    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 2%; 

    background-color: white;
    border-radius: 4em;
    overflow: hidden;

    font-weight: 600;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
.numbers {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 5vh;
    color: #000000;

    width: 50%;
}
</style>