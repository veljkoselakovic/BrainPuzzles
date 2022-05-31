<template>
    <div class="fightListCanvas">
        <div class="flexFightList">
            <div class="item">
                <component 
                    v-for="field in fields1" 
                    v-bind:is="field.type" 
                    v-bind:key="field.key" 
                    v-bind="field.itemProps">
                </component>
            </div>
            <div class="item">
                <component 
                    v-for="field in fields2" 
                    v-bind:is="field.type" 
                    v-bind:key="field.key" 
                    v-bind="field.itemProps">
                </component>
            </div>
        </div>
        <hr>
        <div class="bottomFightList">
            <!-- <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf"> -->
            <InputField id="fightListGuess" type="text" text="Guess" style="margin-top: 2%"></InputField>
            <FancyButton text="Enter"  @click="enterItem($event)"></FancyButton>
            <FancyButton text="Submit" @click="submitAll($event)"></FancyButton>
        </div>
    </div>
</template>

<script>
import FightListItem from '../FightListComponents/FightListItem.vue'
import FancyButton from '../../BasicComponents/FancyButton.vue'
import InputField from '../../BasicComponents/InputField.vue'
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    components: {FightListItem, FancyButton, InputField},
    name: 'FightListCanvas',
    props: ['themeId'],
    data() {
        return {
            fields1 : [],
            fields2 : [],
            count : 0
        }
    },
    methods: {
        enterItem(event) {
            event.preventDefault();

            var guess = document.getElementById("fightListGuess").firstChild.value;
            console.log(guess);

            axios.post('/fightlist', {
                guessValue : guess,
                themeId : this.themeId
            }).then((response) => {
                let fields = (this.count % 2 == 1 ? this.fields2 : this.fields1);
                fields.push({
                    'type': FightListItem,
                    'key': this.count++,
                    'itemProps': {
                        text : response.data['guess'],
                        points : response.data['points']
                    }
                });
                document.getElementById("fightListGuess").firstChild.value = "";
            });
        },
        submitAll(event) {
            event.preventDefault();
            axios.post('/fightlist_end', {}).then(() => {
                console.log('logged')
                location.href = "/dashboard"
            });
        }
    }
}
</script>

<style scoped>
.fightListCanvas {
    position:relative;

    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 2%;
    
    padding: 2vw;

    width: 46vw;
    height: 52vh; 
    
    z-index: 1;

    background-color: white;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 2em;

    overflow: hidden;
}
.flexFightList {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 60%;

    overflow-x: hidden;
    overflow-y: auto;
}
.item {
    display: inline-block;

    width: 50%;
    height: 100%;
    
    margin-left: 2%;
    margin-right: 2%;
}
</style>