<template>
    <div class="fightListCanvas">
        <div class="flexFightList">
            <div class="item">
                <FightListItem text=Toyota points=1></FightListItem>
                <FightListItem text=Toyota points=2></FightListItem>
                <FightListItem text=Toyota points=3></FightListItem>
                <FightListItem text=Toyota points=1></FightListItem>
                <FightListItem text=Toyota points=2></FightListItem>
                <FightListItem text=Toyota points=3></FightListItem>
                <FightListItem text=Toyota points=1></FightListItem>
                <FightListItem text=Toyota points=2></FightListItem>
                <FightListItem text=Toyota points=3></FightListItem>
                <FightListItem text=Toyota points=1></FightListItem>
                <FightListItem text=Toyota points=2></FightListItem>
                <FightListItem text=Toyota points=3></FightListItem>
            </div>
            <div class="item">
                <FightListItem text=Toyota points=1></FightListItem>
                <FightListItem text=Toyota points=2></FightListItem>
                <FightListItem text=Toyota points=3></FightListItem>
            </div>
        </div>
        <hr>
        <div class="bottomFightList">
            <InputField type="text" text="Guess" style="margin-top: 2%"></InputField>
            <FancyButton text="Enter"></FancyButton>
            <FancyButton text="Submit"></FancyButton>
        </div>
    </div>
</template>

<script>
import FightListItem from './FightListItem.vue'
import FancyButton from '../BasicComponents/FancyButton.vue'
import InputField from '../BasicComponents/InputField.vue'

export default {
    components: {FightListItem, FancyButton, InputField},
    name: 'FightListCanvas'
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