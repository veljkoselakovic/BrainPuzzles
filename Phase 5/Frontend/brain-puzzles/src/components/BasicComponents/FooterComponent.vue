<template>
  <div class="container">
    <div class="makers"> © Ćivot 2022</div>
  </div>

</template>


<script>


export default {
  name: 'FooterComponent',
  props: [
  ]
}
</script>

<style scoped>
.container {
  background-color:white;
  height: 7vh;
  /* margin-bottom: 10px; */
  margin-top: 0.75%;
  }
.makers {
    font-size: 0.6vw;
    font-weight: bold;
    position:relative;
    top:80%;

}
</style>