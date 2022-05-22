<template>
    <header><HeaderComponent/></header>
    <div class="div">
        <FancyText width=45vw height=3vw text='Rankings' fontSize=25px></FancyText>
        <br>
        
    </div>
    <RankingCanvasComponent :niz="['jedan', 'dva', 'tri', 'cetiri', 'pet', 'sest', 'sedam', 'osam',
     'devet', 'deset', '1000','900','800','700','600','500','400','300','200','100']"/>
    <footer><FooterComponent/></footer>
</template>


<script>
import FooterComponent from './BasicComponents/FooterComponent.vue'
import HeaderComponent from './BasicComponents/HeaderComponent.vue'
import FancyText from './BasicComponents/FancyText.vue'
import RankingCanvasComponent from './CanvasComponents/RankingCanvasComponent.vue'

export default {
    components:{FooterComponent, HeaderComponent, FancyText, RankingCanvasComponent},
    name: 'RankingComponent'
}
</script>

<style scoped>
.div{
    margin-top: 1%;
    text-align: center;
}
</style>