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
            <div class="kzzTop">
                <div class="numbers">
                    {{this.timerCount}}s
                </div>
                <div class="numbers">
                    {{this.points}}p
                </div>
            </div>
            <FancyText style="margin-top: 2%; border-radius: 1em" width=50vw height=20vh :text="this.questionText" fontSize=36px></FancyText>
            <KZZCanvasComponent id="kzzCanvas"></KZZCanvasComponent>
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent      from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent      from '../../BasicComponents/HeaderComponent.vue'
import FancyText            from '../../BasicComponents/FancyText.vue'
import KZZCanvasComponent   from '../KZZComponents/KZZCanvasComponent.vue'

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    components: {FooterComponent, HeaderComponent, KZZCanvasComponent, FancyText},
    name: 'KZZComponent',
    data() {
        return {
            questionNumber: 1,
            questionText: "",
            questionId: -1,
            points: 0,
            timerCount: 10,
            timerHandler: null,
            classes: ["incorrect", "correct"]
        }
    },
    mounted() {
        this.getNextQuestion();
        this.timerHandler = setInterval(this.timer, 1000);
    },
    methods: {
        submitAnswer(answer) {

            clearTimeout(this.timerHandler);

            axios.post('/kzzquestion', {
                answerValue : answer,
                questionId : this.questionId
            }).then((response) => {
                this.points += response.data['points'];
                this.clearInput();
                this.setCorrectAnswer(response.data['correctAnswer']);
                this.checkAnswer(response.data['isCorrect']);
            });
        },
        checkAnswer(isCorrect) {
            let currentAnswer = "answer" + this.questionNumber++;

            document.getElementById(currentAnswer).classList.remove("current");
            document.getElementById(currentAnswer).classList.add(this.classes[isCorrect]);

            this.toggle(true);

            setTimeout(this.next, 1000);
        },
        next() {
            if (this.questionNumber <= 10) {

                document.getElementById("answer" + this.questionNumber).classList.add("current");

                this.getNextQuestion();

                this.timerCount = 10;
                this.timerHandler = setInterval(this.timer, 1000);
            }
            else {
                axios.post('/kzz_end', {}).then(() => {
                    location.href = "/dashboard";
                });
            }
        },
        getNextQuestion() {
            this.toggle(false);
            this.setCorrectAnswer("");

            axios.get('/kzzquestion', {}).then((response) => {
                this.questionText = response.data['questionText'];
                this.questionId = response.data['questionId'];
            });
        },
        clearInput() {
            document.getElementById("kzzAnswer").firstChild.value = ""
        },
        toggle(value) {
            document.getElementById("kzzCanvas").children[1].firstChild.disabled = value;
            document.getElementById("kzzCanvas").children[2].firstChild.disabled = value;
        },
        setCorrectAnswer(answer) {
            document.getElementById("message").textContent = answer;
        },
        timer() {
            if(--this.timerCount == 0) {
                this.submitAnswer("");
            }
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
.kzzTop {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position:relative;

    width: 50vw;
    height: 8vh;
    
    margin: 0 auto;
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