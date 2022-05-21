<template>
    <div class="canvas">
        {{text}}
    </div>
 <!-- <FancyText width=50% height=3.5vw text='blbl' fontSize=20px></FancyText> -->
</template>



<script>
export default {
    name: 'FancyText',
    props: [
        'width', 'height', 'text', 'fontSize'
    ]
}
</script>

<style scoped>
.canvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: v-bind(width);
    height: v-bind(height); 
    line-height: v-bind(height);
    background-color: white;
    border-radius: 2em;
    overflow: hidden;

    font-size: v-bind(fontSize);
    font-weight: 600;
}
</style>