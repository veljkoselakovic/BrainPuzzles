<template>
  <div class="container">
    <div class = "canvas cell">
      <img alt="BrainPuzzles logo" class = "logoPicture"  src="static/res/logo.png">
      <p class="errorClass">{{errors}}</p>

      <form id = "formLogIn" method="post">
      <input type="hidden" name="csrfmiddlewaretoken" v-bind:value="csrf">
      <InputField text = "Username" type="text" name="user"/>
      <InputField text = "Password" type="password" name="pass"/>
      <FancyButton text="Log In" />
      </form>

      <p class="registerMessage" >Niste član? 
      <router-link class="registerLink" @click="clickedRegister" to="/register">Registrujte se</router-link>!</p>
      <FancyButton class="guestButton" text="Sign in as Guest" />
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
  name: 'LogInCanvasComponent',
  props: [
    'width'
  ],
  data() {
    var errs = document.getElementsByClassName("error")[0]
    if(errs !== undefined){
      errs = errs.textContent
    }

    var cookies = document.cookie
    var csrf_token
    if(cookies == null || cookies == ""){
      csrf_token = ""
    }
    else{
      csrf_token =document.cookie.split('; ')
                 .find(row => row.startsWith('csrftoken'))
                 .split('=')[1]
    }

    return {
      //csrf: "",
      csrf: csrf_token,
      errors: errs,
    }
  },
  methods: {
    clickedRegister() {
      this.$data.errors = undefined;
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