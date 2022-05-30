<template>
    <div class="fightListCanvas">
        <div class="flexFightList">
            <div class="item">

            <component v-for="field in fields" 
            v-bind:is="field.type" v-bind:key="field.key" v-bind="field.itemProps">
            </component>


            </div>
            <div class="item">
                <component v-for="field in fields2" 
            v-bind:is="field.type" v-bind:key="field.key" v-bind="field.itemProps">
            </component>
            </div>
        </div>
        <hr>
        <div class="bottomFightList">
            <!-- <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf"> -->

            <InputField type="text" text="Guess" id="fightListGuess" style="margin-top: 2%"></InputField>
            <FancyButton text="Enter" @click="enterItem($event)"></FancyButton>
            <FancyButton @click="submitAll($event)" text="Submit"></FancyButton>
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
            fields : [],
            fields2 : [],
            count : 0,
        }
    },
    methods: {
        enterItem(event){
            event.preventDefault();

            var guess = document.getElementById("fightListGuess").firstChild.value;
            console.log(guess);

            axios.post('/fightlist', {
                guessValue : guess,
                themeId : this.themeId
            }).then((response) => {
                if(this.count % 2 == 1){
                    console.log(this.count)
                    this.fields2.push({
                        'type':FightListItem,
                        'key':this.count++,
                        'itemProps': {
                            text : response.data['guess'],
                            points : response.data['points']
                        }
                    })
                }
                else
                {
                    this.fields.push({
                        'type':FightListItem,
                        'key':this.count++,
                        'itemProps': {
                            text : response.data['guess'],
                            points : response.data['points']
                        }
                    })
                }
                document.getElementById("fightListGuess").firstChild.value = "";
                
            })
                
                
        


            },
        submitAll(event) {
            event.preventDefault();
            axios.post('/fightlist_end', {}).then(() => {
                console.log('logged')
                location.href = "/dashboard"
            })

        }
    },
    
}
</script>

<style scoped>
.fightListCanvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 46vw;
    height: 52vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 2%;
    margin-top: 2%;
    padding: 2vw;
}
.flexFightList {
    display: flex;
    width: 100%;
    height: 60%;
    justify-content: space-between;
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