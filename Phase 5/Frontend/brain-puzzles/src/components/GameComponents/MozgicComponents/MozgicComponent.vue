<template>
    <header><HeaderComponent/></header>

    <div class="div3">

    <div class="div">
    
        <div class="canvas" id="mozgic">
            <table style="width:60%; height:60%">
                 <tr v-for="(row, i) in rows" v-bind:key="i">
                 
                    <td v-for="(col,k) in cols" v-bind:key="k">
                        <div class="field">
                        <div class="circle" :id="(row-1)*28+(col-1)*7" @click="isprobavam"></div>
                        <img :id="(row-1)*28+(col-1)*7+1" @click="isprobavam" src="./Icons/igramozgic.jpg" alt="mozgicsimb" style="width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute; visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+2" @click="isprobavam" src="./Icons/zvezda.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+3" @click="isprobavam" src="./Icons/tref.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+4" @click="isprobavam" src="./Icons/pik.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+5" @click="isprobavam" src="./Icons/herc.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+6" @click="isprobavam" src="./Icons/karo.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        
                        {{ col[k] }}
                        </div>
                    </td>
                  
                </tr>
            </table>
        </div>
    
    </div>


    <div class="div">
    
        <div class="canvas" id="mozgic">
            <table style="width:60%; height:60%">
                <tr v-for="(row2, i2) in rows2" v-bind:key="i2">
                    <td v-for="(col2,k2) in cols2" v-bind:key="k2">
                        <div class="circle" :id="(row2-1)*28+(col2-1)*7+169"></div>
                        {{ col2[k2] }}
                     </td>
                 </tr>
            </table>
        </div>
    
    </div>






    <div class="div"><div class="canvas" id="forClicking">
        <img class="simbol" id="1" src="./Icons/igramozgic.jpg" alt="mozgicsimb" style="width:4.68vw" @click = "symbolClicked">
        <br>
        <img class="simbol" id="2" src="./Icons/zvezda.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="3" src="./Icons/tref.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="4" src="./Icons/pik.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="5" src="./Icons/herc.jpg" alt="mozgicsimb" @click = "symbolClicked">
        <br>
        <img class="simbol" id="6" src="./Icons/karo.jpg" alt="mozgicsimb" style="width:2.8vw" @click = "symbolClicked">
    </div></div>

    </div>

    <br>

    <div class="div2">

    <div class="div1"><MozgicItem></MozgicItem></div>
    <div class="div1"><FancyButton style="width:25vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Submit" @click="submitGuess($event)"></FancyButton></div>
    <div class="div1"><FancyButton style="width:9.375vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Back" @click="eraseSymbol"></FancyButton></div>
    </div>

    <footer><FooterComponent/></footer>
</template>

<script>
import FooterComponent from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../../BasicComponents/HeaderComponent.vue'
import MozgicItem from './MozgicItem.vue'
import FancyButton from '../../BasicComponents/FancyButton.vue'

var a=0, b=0;
//var value=0;
var slikaId=0;
const combination=[];
const guess=[];
//var results=[];
//var submitted=0;

for(let i=0;i<4;i++)
{
    combination.push(Math.floor(Math.random()*6)+1);
}


export default {
    components :{FooterComponent, HeaderComponent, FancyButton, MozgicItem},
    name: 'MozgicComponent',

    data(){

        return{
        polje: a*4+b,
        slika:slikaId,
        rows:6,
        rows2:6,
        cols2:4,
        cols:4}
    },

    computed:{
        getIdS: { 
            get(){ return this.slika },

            set(newValue) { this.slika=newValue }
        },

        polja: { 
            get(){ return this.polje },

            set(newValue) { this.polje=newValue }
        }
    },

    methods:
    {

        isprobavam:function(event){
            let t = event.target.id;
            alert(t);
        },


        symbolClicked: function(event){
            let p = event.target.id;
            slikaId=p;
            this.slika=p;
            //alert("slika "+slikaId);
            //alert("stigao do " +a + " i " + b);
            //alert(combination);
            guess.push(p);
            //alert(guess);
            
            if(b!=-1)
            {
            if(p==1)
            {
                document.getElementById(a*28+b*7+1).style.visibility="visible";
            }
            if(p==2)
            {
                document.getElementById(a*28+b*7+2).style.visibility="visible";
            }
            if(p==3)
            {
                document.getElementById(a*28+b*7+3).style.visibility="visible";
            }
            if(p==4)
            {
                document.getElementById(a*28+b*7+4).style.visibility="visible";
            }
            if(p==5)
            {
                document.getElementById(a*28+b*7+5).style.visibility="visible";
            }
            if(p==6)
            {
                document.getElementById(a*28+b*7+6).style.visibility="visible";
            }
            }
            
            if(b==3) {a++; b=0;}
            else b++;
            
            
        },

        submitGuess(event){
                //submitted=1;
                event.preventDefault();
                const answer=combination.slice();
                let goodPlace=0;
                let wrongPlace=0;
                while(guess.length>4) guess.pop();
                for(let i=0;i<4;i++){
                    if(guess[i]==answer[i]) 
                    {
                        goodPlace++;
                        answer[i]=0;
                    }
                }

               

                for(let i=0;i<4;i++)
                {
                    for(let j=0;j<4;j++){
                        if(guess[i]==answer[j]) 
                        {
                            wrongPlace++;
                            answer[j]=0;
                            j=4;
                        }
                    }
                } 
                //alert(goodPlace);
                //alert(wrongPlace);
                let v=a-1;
                let idField=v*28+169;
                //const idFields=[];
                var item;
                //var items=[];
                //var items2=[];

                for(let i=0;i<goodPlace;i++)
                {
                    //alert("U goodplace sam");
                    idField = v*28+7*i+169;
                    
                    item=document.getElementById(idField);
                    item.style.backgroundColor="pink";
                    
                }
                //item.style.backgroundColor="pink";

                
                for(let j=0;j<wrongPlace;j++)
                {
                    //alert("U wrongplace sam");
                    idField = v*28+goodPlace*7+7*j+169;
                    item=document.getElementById(idField);
                    //items2.push(item);
                    item.style.backgroundColor="yellow";
                }
               

                
                while(guess.length>0) {  guess.pop(); }
                
        },

        eraseSymbol(){
            document.getElementById(a*28+(b-1)*7+1).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7+2).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7+3).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7+4).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7+5).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7+6).style.visibility="hidden";
            document.getElementById(a*28+(b-1)*7).style.visibility="visible";
            //if(b==3)
            if(b>0) b--;
            else if(b==0){b=3;a--;}
            guess.pop();
        },

        /*
        endGame()
        {
            alert("Kraj igre");
        }*/

    }
}


</script>

<style scoped>

footer {
    margin-top:2%;
}

header {
    margin-top:-3%;
}
.div{
     display: inline-block;
     margin: 0.4% 0.8%;
     
}

.div1{
    display:inline-block;
    margin-top: 3.96vh;
}

.div2{
    display:flex;
    justify-content: flex-center;
    margin-left:3.125vw;
}
.div3{
    display:flex;
    justify-content: flex-center;
    margin-left:6.25vw;
}

.field{
    position:relative;
}


#forClicking{
    position:relative;
    z-index: 1;
    margin: 0 auto;
    margin-top:2.64vh;
    width: 6.25vw;
    height: 49.27vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;

  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);
}

.simbol{
    width: 3.125vw;
    /* height: 80px; */
}

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
.circle {
       position:relative;
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