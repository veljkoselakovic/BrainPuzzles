<template>
    <div class="canvas" id="mozgic">
    <table style="width:60%; height:60%">
      <tr v-for="(row, i) in rows" v-bind:key="i">
        <td v-for="(col,k) in cols" v-bind:key="k">
            <div id="circle"></div>
            <!--<div v-if="value1==='A'" id="simbol"><img src="./igramozgic.jpg" alt="igramozgic" id="pict"></div>-->
            {{ col[k] }}
        </td>
      </tr>
    </table>
    </div>
</template>


<script>
 
export default {
    components :{},
    name:'MozgicCanvasComponent',


    data(){
        
        return{
        rows:6,
        cols:4
        }
    }
}


</script>



<style scoped>
#mozgic {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    margin-top:3.83vh;
    width: 20.9375vw;
    height: 50vh; 
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

#pict {
      float: left;
      width: 3.625vw;
      height: 6.5vh;
      margin-left: 65%;
      margin-top:10%;
    }

table{
    justify-content:center;
}

td, tr{
    text-align:center;
}

</style>