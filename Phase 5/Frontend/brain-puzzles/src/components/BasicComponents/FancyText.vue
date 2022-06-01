<template>
    <div class="canvas">
        {{text}}
    </div>
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
    position: relative;
    z-index: 1;
    margin: 0 auto;

    width: v-bind(width);
    height: v-bind(height); 

    background-color: white;
    border-radius: 2em;
    overflow: hidden;

    line-height: v-bind(height);
    font-size: v-bind(fontSize);
    font-weight: 600;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
</style>