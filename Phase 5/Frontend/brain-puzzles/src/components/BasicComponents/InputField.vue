<template>
    <div class=inputContainer>
        <input class="inputField" :name="name" :type="type" :placeholder="text" :value="value" @input = "inputChanged"/>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: [
    'text', 'type', 'name', 'value'
  ],
  methods: {
    getInfo() {
        return this.value;
    },
    inputChanged() {
        this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped>
.inputContainer{
    margin-top: 1%;
    width: 100%;
    overflow: hidden;
    font-size:1vw;
}
.inputField::placeholder {
    /* color:black; */
    color: #7879F1;
    font-weight: 500;
}
.inputField:focus{ 
    width:77%;
    outline:none;
    border: 2px #F178B6 solid;
}
.inputField:focus::placeholder{
    color: #F178B6;
}
.inputField{
    width:75%;
    padding: 2%;

    border: 2px #7879F1 solid;
    font-size:1vw;
    text-align: center;

    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
}
</style>