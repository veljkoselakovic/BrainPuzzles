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
            <FancyText style="margin-top: 2%" width=50vw height=10vh :text="this.questionText" fontSize=36px></FancyText>
            <KZZCanvasComponent id="kzzCanvas" ></KZZCanvasComponent>
        </div>
        <div id="kzzTimer">
            {{this.timerCount}}s
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../../BasicComponents/HeaderComponent.vue'
import FancyText from '../../BasicComponents/FancyText.vue'
import KZZCanvasComponent from '../KZZComponents/KZZCanvasComponent.vue'

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    components: {FooterComponent, HeaderComponent, KZZCanvasComponent, FancyText},
    name: 'KZZComponent',
    data() {
        return {
            questionText: "",
            questionId: -1,
            tableData: {},
            timerCount: 10,
            questionNumber: 1,
            classes: ["incorrect", "correct"],
            timerHandler: null
        }
    },
    mounted() {
        this.getNextQuestion();
        this.timerHandler = setInterval(this.timer, 1000);
    },
    methods: {
        submitAnswer(answer) {
            axios.post('/kzzquestion', {
                answerValue : answer,
                questionId : this.questionId
            }).then((response) => {
                this.checkAnswer(response.data['isCorrect']);
            });
        },
        checkAnswer(isCorrect) {
            let currentAnswer = "answer" + this.questionNumber++;

            document.getElementById(currentAnswer).classList.remove("current");
            document.getElementById(currentAnswer).classList.add(this.classes[isCorrect]);

            this.next();
        },
        timer() {
            if(--this.timerCount == 0) {
                clearTimeout(this.timerHandler);
                this.next();
            }
        },
        next() {
            if (this.questionNumber <= 10) {

                document.getElementById("answer" + this.questionNumber).classList.add("current");

                this.getNextQuestion();

                this.timerCount = 10;
                this.timerHandler = setTimeout(() => {
                    this.timerCount--;
                }, 1000);
            }
            else {
                axios.post('/kzz_end', {}).then(() => {
                    location.href = "/dashboard";
                });
            }
        },
        getNextQuestion() {
            axios.get('/kzzquestion', {}).then((response) => {
                this.questionText = response.data['questionText'];
                this.questionId = response.data['questionId'];
            });
            console.log(this.questionId);
        },
        clearInput() {
            document.getElementById("kzzInput").firstChild.firstChild.firstChild.value = "";
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
.correct {
    background: #A5A6F6;
}
.incorrect {
    background: #EF5DA8;
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