<template>
  <div class="container">
    <div class = "canvas cell">
      <img alt="BrainPuzzles logo" class = "logoPicture"  src="static/res/logo.png">

      <p class="errorClass">{{errors}}</p>
      <form id = "formRegister" method="post">
      <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf">

      <InputField text = "Username" type="text" name="user"/>
      <InputField text = "Email" type="email" name="email"/>
      <InputField text = "Password" type="password" v-model="password" name="pass"/>
      <InputField text = "Password again" type="password" v-on:input="validate" v-model="password_again" name="pass_again"/>
      <p  class="registerMessage" style="opacity:0.7">Sva polja moraju biti popunjena!</p>
      <p class="registerMessage">Imate nalog? 
        <router-link class="registerLink" to="/">Ulogujte se</router-link>
 ovde!</p>
      
      <FancyButton text="Register"  />
      </form>



    </div>
    <div class="blur cell"></div>

  </div>
    <footer><FooterComponent/></footer>

</template>


<script>
import FancyButton from '../BasicComponents/FancyButton.vue'
import FooterComponent from '../BasicComponents/FooterComponent.vue'
import InputField from '../BasicComponents/InputField.vue'

export default {
  components: { InputField, FancyButton, FooterComponent },
  name: 'CanvasComponent',
  props: [
    'width'
  ],
  data() {

    var errs = document.getElementsByClassName("error")[0]
    if(errs !== undefined){
      errs = errs.textContent
    }

    return {
      csrf:"",
      // csrf: document.cookie.split('; ')
      //             .find(row => row.startsWith('csrftoken'))
      //             .split('=')[1],
      errors: errs,
      password: '',
      password_again: '',
    }
  },
  methods: {
    validate: function() {
        console.log("is it the same?")
        console.log(this.$data.password === this.$data.password_again)
    }
  }
}
</script>

<style scoped>
.canvas {
  position:relative;
  z-index: 1;
  margin: 0 auto;
  width: v-bind(width);
  /* height: v-bind(height); */
  background-color: white;
  border-radius: 2em;
  overflow: hidden;

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
  /* height: calc(v-bind(height) * 1.05); */
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
.cell { 
  grid-row-start: 1;
  grid-column-start:1;
}
.logoPicture{
  width:7vh;
  height:auto;
}
.registerMessage, .errorClass{ 
  font-weight: bold;
  font-size: 0.5vw;

}

.registerLink {
  margin-top:10%;

  text-decoration: none;
  color:#5D5FEF;
}
.registerLink:hover {
  color:#F178B6;
  cursor:pointer;
}
.guestButton {
  margin-top:10%;
  margin-bottom: 4%;
  /* font-size:0.8vw; */
  font-weight:400;
  transform: scale(0.5);


}

footer {

position: absolute;
bottom: 10vh;
left:0;
right:0;


}
</style>