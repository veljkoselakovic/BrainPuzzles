<template>
  <div class="container">
    <div class = "canvas">
      <img alt="BrainPuzzles logo" class = "logoPicture"  src="../assets/logo.png">
</div>
    <div class="blur"></div>
  </div>

</template>


<script>
export default {
  name: 'CanvasComponent',
  props: [
    'width', 'height'
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
  background-color: white;
  border-radius: 2em;
  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
.blur {
  position:relative;
  z-index: 0;
  /* top:7%; */
  margin: 0 auto;
  /* width: v-bind(width);
  height: v-bind(height); */
  width: calc(v-bind(width) * 1.05);
  height: calc(v-bind(height) * 1.05);
  background-color: #F178B6;
  -webkit-filter: blur(4em);
  -moz-filter: blur(4em);
  -o-filter: blur(4em);
  -ms-filter: blur(4em);
  filter: blur(4em);
  
}
.container {
  display:grid;
  grid-template-columns:1fr;
}
.container div { 
  grid-row-start: 1;
  grid-column-start:1;
}
.logoPicture{
  width:10vh;
  height:auto;
}
</style>