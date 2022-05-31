<template>
  <div class="container">
    © Ćivot 2022
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  background-color:white;
  height: 5vh;
  margin-top: 0.75%;

  font-size: 1vw;
  font-weight: bold;
}
</style>