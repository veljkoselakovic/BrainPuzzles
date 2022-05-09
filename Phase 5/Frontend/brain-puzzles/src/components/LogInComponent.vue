<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"> -->
    <div class="title"> BrainPuzzles</div> -->
     <LogInCanvasComponent width=30vw >



  </LogInCanvasComponent>
  
   
  </template>

<script>
import LogInCanvasComponent from './BasicComponents/CanvasComponents/LogInCanvasComponent.vue'

export default {
  name: 'LogInComponent',
  components: {
        LogInCanvasComponent
  },
  methods: {
    
  },
  
}
</script>

<style>
#app {
  background-color: #7879F1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4%;
}
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
body {
  background-color: #7879F1;
}

.title {
  position: relative;
  z-index: 4;
  top:10%;
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-size: 4vw;
  letter-spacing: 0.05em;
  color:white;
  margin-bottom: 0;
  line-height: 1.3em;
}

</style>
