<template>
    <div class="contFightListItem">
        <div class="textFightListItem">
            {{text}}
        </div>
        <div class="points" :class="getClass()">
            +{{points}}
        </div>
    </div>
 <!-- <FightListItem text=Toyota points=0> -->
</template>



<script>
export default {
    name: 'FightListItem',
    props: [
        'text', 'points'
    ],
    methods: {
        getClass() {
            const classes = ['zero', 'one', 'two', 'three'];
            return classes[this.points];
        }
    }
}
</script>

<style scoped>
.contFightListItem {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;
}
.textFightListItem {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
}
.points {
    width: 30px;
    height: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;

    color: white;
}
.zero {
    background: #EDE9EB;
}
.one {
    background: #FCDDEC;
}
.two {
    background: #F178B6;
}
.three {
    background: #EF5DA8;
}
</style>