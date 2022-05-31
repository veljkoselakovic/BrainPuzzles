<template>
    <HeaderComponent/>
    <div id="kzzDiv">
        <div id="kzzLeft">
            <div id="answers">
                <span class="answer current" id="answer1"></span>
                <span class="answer" id="answer2"></span>
                <span class="answer" id="answer3"></span>
                <span class="answer" id="answer4"></span>
                <span class="answer" id="answer5"></span>
                <span class="answer" id="answer6"></span>
                <span class="answer" id="answer7"></span>
                <span class="answer" id="answer8"></span>
                <span class="answer" id="answer9"></span>
                <span class="answer" id="answer10"></span>
            </div>
            <FancyText style="margin-top: 2%" width=50vw height=10vh text='Japanese car manufacturers' fontSize=36px></FancyText>
            <KZZCanvasComponent></KZZCanvasComponent>
        </div>
        <div id="kzzTimer">
            10s
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../../BasicComponents/HeaderComponent.vue'
import FancyText from '../../BasicComponents/FancyText.vue'
import KZZCanvasComponent from '../KZZComponents/KZZCanvasComponent.vue'

export default {
    components: {FooterComponent, HeaderComponent, KZZCanvasComponent, FancyText},
    name: 'KZZComponent',
    methods: {
        submitAnswer() {
            console.log("Here");
        }
    }
}
</script>

<style scoped>
#kzzDiv {
    display: flex;
    justify-content: space-evenly;
    height: 70vh;
}
#kzzLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#answers {
    margin-top: 2%;
}
.answer {
    height: 2.5em;
    width: 2.5em;

    margin-left: 2.5px;
    margin-right: 2.5px;

    box-shadow: 0px 22px 25px -9px rgba(0, 0, 0, 0.25);

    background: white;
    border-radius: 50%;
    display: inline-block;
}
.current {
    border: 6px solid #EF5DA8;
    box-sizing: border-box;
}
#kzzTimer {
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