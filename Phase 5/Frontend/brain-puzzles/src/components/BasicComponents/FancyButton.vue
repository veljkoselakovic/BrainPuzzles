<template>

    <div class=buttonContainer>
        <button class="buttonClass" v-on:click="clicked">{{text}}</button>
    </div>


</template>


<script>
export default {
  name: 'FancyButton',
  props: [
    'text'
  ],
  methods: {
      clicked() {
        var fields = document.getElementsByClassName('inputField');
        console.log(fields[0].value);
        console.log(fields[1].value);
        location.href = "alternate"
        

      }
  }
}
</script>

<style scoped>
.buttonContainer {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
}
.buttonClass {
    width: 50%;
    height: 80%;
    background-color:#5D5FEF;
    color:white;
    outline:none;
    border:none;

    font-weight: 600;
    /* font-size:1.5em; */
    font-size: 1.5vw;

    padding-top: 1%;
    padding-bottom: 1%;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.25);

    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out

}
.buttonClass:hover {
    cursor:pointer;
    background-color: #F178B6;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
}

</style>