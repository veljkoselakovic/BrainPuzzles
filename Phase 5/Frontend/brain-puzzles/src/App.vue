<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <router-view />
  <div id="nav" style="position:absolute; left=0;"></div>
</template>

<script>
// import CanvasComponent from './components/CanvasComponent.vue'

export default {
  name: 'App',
  components: {
  },
  methods: {
    printForm(e) {
      const form = e.target
      const formData = new FormData(form) // get all named inputs in form
      for (const [inputName, value] of formData) {
        console.log({ inputName, value })
      }
    }
  },
  
}
</script>
