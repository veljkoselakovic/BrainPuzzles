<template>
  <div class="canvas" id="mi">
    <table style="width:60%; height:60%">
      <tr v-for="(row, i) in rows" v-bind:key="i">
        <td v-for="(col,k) in cols" v-bind:key="k">
            <div id="circle"></div>
            {{ col[k] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'MozgicItem',
  data() {
    return {
      rows: 1,
      cols: 4
    }
  }
}
</script>

<style scoped>
#mi {
  position:relative;
  margin-left:3.125vw;

  width: 20.9375vw;
  height: 9.25vh; 

  background-color: white;
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}
#circle {
  float: left;

  width: 3.625vw;
  height: 6.5vh;

  margin-left: 65%;
  margin-top:10%;

  shape-outside: circle();
  clip-path: circle();
  
  background: #FCDDEC;
}
</style>