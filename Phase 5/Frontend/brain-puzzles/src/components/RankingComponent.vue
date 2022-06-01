<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText width=45vw height=3vw text='Rankings' fontSize=25px></FancyText>
        <br>
    </div>
    <RankingCanvasComponent :niz="pairs"/>
    <footer><FooterComponent/></footer>
</template>


<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'
import RankingCanvasComponent from './CanvasComponents/RankingCanvasComponent.vue'
import axios from "axios";

export default {
    components:{FooterComponent, HeaderComponent, FancyText, RankingCanvasComponent},
    name: 'RankingComponent',
    mounted() {
        axios.get('/ranking').then(()=>{
            this.tableData = JSON.parse(document.getElementById('jsonInfo').textContent)
            this.pairs = this.tableData.pairs
            console.log("uhavtio")
        });
    },
    data()  {
        return {
            tableData: {},
            pairs:[]
        }
    }
}
</script>

<style scoped>
.div{
    margin-top: 1%;
    text-align: center;
}
</style>