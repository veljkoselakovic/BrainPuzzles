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
  height: 10vh;
  }
.makers {
    font-size: 0.6vw;
    font-weight: bold;
    position:relative;
    top:80%;

}
</style>