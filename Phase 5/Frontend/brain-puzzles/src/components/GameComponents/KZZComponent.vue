<template>
    <HeaderComponent/>
    <div class="kzzDiv">
        <div>
            <div>
                <FancyText style="margin-top: 2%" width=50vw height=10vh text='Japanese car manufacturers' fontSize=36px></FancyText>
            </div>
            <KZZCanvasComponent></KZZCanvasComponent>
        </div>
        <div class="timer">
            10s
        </div>
    </div>
    <FooterComponent/>
 <!-- <FightListItem text=Toyota points=0> -->
</template>



<script>
import FooterComponent from '../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../BasicComponents/HeaderComponent.vue'
import FancyText from '../BasicComponents/FancyText.vue'
import KZZCanvasComponent from './KZZCanvasComponent.vue'

export default {
    components: {FooterComponent, HeaderComponent, KZZCanvasComponent, FancyText},
    name: 'KZZComponent'
}
</script>

<style scoped>
.kzzDiv{
    display: flex;
    justify-content: space-evenly;
    height: 70vh;
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