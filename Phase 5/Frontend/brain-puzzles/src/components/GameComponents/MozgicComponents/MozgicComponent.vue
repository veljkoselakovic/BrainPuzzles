<template>
    <header><HeaderComponent/></header>


    <div class="div3">

    <div class="div">
    
        <div class="canvas" id="mozgic">
            <table style="width:60%; height:60%">
                 <tr v-for="(row, i) in rows" v-bind:key="i">
                 
                    <td v-for="(col,k) in cols" v-bind:key="k">
                        <div class="field">
                        <div class="circle" :id="(row-1)*28+(col-1)*7"></div>
                        <img :id="(row-1)*28+(col-1)*7+1"  src="./Icons/igramozgic.jpg" alt="mozgicsimb" style="width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute; visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+2"  src="./Icons/zvezda.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+3"  src="./Icons/tref.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+4"  src="./Icons/pik.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+5"  src="./Icons/herc.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row-1)*28+(col-1)*7+6"  src="./Icons/karo.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        
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

    <div class="timer" id="sec">
            {{this.timerCount}}s
    </div>

    </div>




    <br>





    <div class="div2">

    <div class="div1">  
        <div class="canvas" id="mi">
            <table style="width:60%; height:60%">
                <tr v-for="(row3, i3) in rows3" v-bind:key="i3">
                    <td v-for="(col3,k3) in cols3" v-bind:key="k3">
                        <div class="circle" :id="(row3-1)*28+(col3-1)*7+330"></div>
                        <img :id="(row3-1)*28+(col3-1)*7+1+330"  src="./Icons/igramozgic.jpg" alt="mozgicsimb" style="width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute; visibility:hidden;">
                        <img :id="(row3-1)*28+(col3-1)*7+2+330"  src="./Icons/zvezda.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;position:absolute;visibility:hidden;">
                        <img :id="(row3-1)*28+(col3-1)*7+3+330"  src="./Icons/tref.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row3-1)*28+(col3-1)*7+4+330"  src="./Icons/pik.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        <img :id="(row3-1)*28+(col3-1)*7+5+330"  src="./Icons/herc.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh; position:absolute;visibility:hidden;">
                        <img :id="(row3-1)*28+(col3-1)*7+6+330"  src="./Icons/karo.jpg" alt="mozgicsimb" style="float: left; width: 3.625vw; margin-left:-3.6vw; height: 7.2vh;  position:absolute;visibility:hidden;">
                        {{ col3[k3] }}
                     </td>
                 </tr>
            </table>
        </div>
    </div>



    <div class="div1"><FancyButton style="width:25vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Submit" @click="submitGuess($event)"></FancyButton></div>
    <div class="div1"><FancyButton style="width:9.375vw; height:5.95vh; transform: scale(1.7); margin-top:2.64vh;" text="Back" @click="eraseSymbol"></FancyButton></div>
    
    </div>

    <footer><FooterComponent/></footer>

</template>

<script>
import FooterComponent from '../../BasicComponents/FooterComponent.vue'
import HeaderComponent from '../../BasicComponents/HeaderComponent.vue'
import FancyButton from '../../BasicComponents/FancyButton.vue'

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


var a = 0, b = 0; //do koje vrste i kolone smo stigli
const combination = []; //kombinacija koja treba da se pogodi
const guess = []; //nas pokusaj
var end = 0; //kraj igre (pogodjeno/nemamo vise pokusaja/isteklo vreme)
var points = 0; 

for (let i = 0; i < 4; i++) //generisanje random niza/kombinacije koja treba da se pogodi
{
    combination.push(Math.floor(Math.random()*6)+1);
}


export default {
    components : {FooterComponent, HeaderComponent, FancyButton},
    name: 'MozgicComponent',

    data(){

        return{

            timerCount: 90,
            rows:6,
            rows2:6,
            cols2:4,
            rows3: 1,
            cols3: 4,
            cols:4
        }
    },

    methods:
    {
        //kad se klikne na slicicu koju zelimo da stavimo u nas niz za pogadjanje 

        symbolClicked: function(event){

            let p = event.target.id; //pamtimo id kliknute slike

            if (end == 1) return; //ukoliko smo dosli do kraja igre, ne zelimo da se slicica prikazuje
            if (b > 3) return; //ako smo kliknuli vise slicica od 4, a nismo kliknuli submit, ne registruje se to kliktanje

            guess.push(p); //u nas niz za pogadjanje ubacujemo slicicu s kliknutim idjem
            
            
            if (p == 1) //ako je id kliknute slicice ==1, prikazi tu slicicu u okviru pokusaja na odgovarajucem mestu
            {
                document.getElementById(a*28+b*7+1).style.visibility = "visible";
            }
            if (p == 2)
            {
                document.getElementById(a*28+b*7+2).style.visibility = "visible";
            }
            if (p == 3)
            {
                document.getElementById(a*28+b*7+3).style.visibility = "visible";
            }
            if (p == 4)
            {
                document.getElementById(a*28+b*7+4).style.visibility = "visible";
            }
            if (p == 5)
            {
                document.getElementById(a*28+b*7+5).style.visibility = "visible";
            }
            if (p == 6)
            {
                document.getElementById(a*28+b*7+6).style.visibility = "visible";
            }
            
            
            b++; //sledeca kolona
            
            
            
        },

        //kliknut submit
        submitGuess(event){

                event.preventDefault();
                const answer = combination.slice(); //niz za trazenu kombinaciju, pamtimo ga 
                let goodPlace = 0; //broj pogodjenih na dobrom mestu
                let wrongPlace = 0; //broj pogodjenih na losem mestu
                if (guess.length < 4) return; //izignorisi submit ako je kliknut pre nego sto su se sva 4 simbola unela
                
                a++; b = 0; //
    
                while (guess.length > 4) guess.pop(); //ukoliko je uneto vise, izbaci

                //logika za goodPlace i wrongPlace
                for (let i = 0; i < 4; i++)
                {
                    if(guess[i] == answer[i]) 
                    {
                        goodPlace++;
                        answer[i] = 0;
                    }
                }

                for (let i = 0; i < 4; i++)
                {
                    for (let j = 0; j < 4; j++){
                        if(guess[i] == answer[j]) 
                        {
                            wrongPlace++;
                            answer[j] = 0;
                            j = 4;
                        }
                    }
                } 

                //logika za koja polja u koju boju treba obojiti
                let v = a - 1;
                let idField = v*28 + 169;
                
                var item;
                
                for (let i = 0; i < goodPlace; i++)
                {
                    idField = v*28 + 7*i + 169;                    
                    item = document.getElementById(idField);
                    item.style.backgroundColor="fuchsia"; 
                }
                

                if (goodPlace == 4 || a == 6) //Kraj igre; izracunaj poene, ne dozvoljavaj vise da se ukucava i prikazi tacno resenje
                {
                    //poeni ako je pogodjeno
                    if (goodPlace == 4) { 
                        if(a <= 4) points = 20; if (a == 5) points = 15; if (a == 6) points = 10;
                        // alert(points); //ZAKOMENTARISATI NAKON POVEZIVANJA S BACKOM
                        axios.post('/mozgicSubmit', {mozgicPts : points}).then(() => {
                            location.href = "/dashboard"
                        })
                        }
                    this.submitResults();
                }

                //nastavak logike za prikazivanje zutih polja                    
                for (let j = 0; j < wrongPlace; j++)
                {
                    idField = v*28 + goodPlace*7 + 7*j + 169;
                    item = document.getElementById(idField);
                    item.style.backgroundColor="yellow";
                }
               
                while (guess.length > 0) {  guess.pop(); } //izbrisi nas pokusaj skroz, spremni smo za novi
                
        },


        //back 
        eraseSymbol(){
            if (b == 0) return; //ne moze da se brise ako nista nismo uneli
            if (b > 4) b = 4; 

            //poslednji dodati stavi na hidden i prikazi kruzic
            document.getElementById(a*28+(b-1)*7+1).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7+2).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7+3).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7+4).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7+5).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7+6).style.visibility = "hidden";
            document.getElementById(a*28+(b-1)*7).style.visibility = "visible";

            
            if(b > 0) b--;
            guess.pop();
        },

        //kraj igre
        submitResults(){ 

                    end = 1; 
                    document.getElementById("sec").style.visibility="hidden"; //ne prikazuj tajmer vise

                    for (let i = 0; i < 4; i++) //prikazi trazenu kombinaciju
                    {
                        if (combination[i] == 1)
                        {
                            document.getElementById(i*7+331).style.visibility = "visible";
                        }
                        if (combination[i] == 2)
                        {
                            document.getElementById(i*7+332).style.visibility = "visible";
                        }
                        if (combination[i] == 3)
                        {
                            document.getElementById(i*7+333).style.visibility = "visible";
                        }
                        if (combination[i] == 4)
                        {
                            document.getElementById(i*7+334).style.visibility = "visible";
                        }
                        if (combination[i] == 5)
                        {
                            document.getElementById(i*7+335).style.visibility = "visible";
                        }
                        if (combination[i] == 6)
                        {
                            document.getElementById(i*7+336).style.visibility = "visible";
                        }
                    }
        }

    },

    //tajmer
    watch: {
        timerCount: {
            handler(value) {
                if(value > 0){
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
                else{
                    this.submitResults();
                }
            }, immediate:true
        }
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

#circleAnswer {
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

.timer {
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 5vh;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-left: 5vw;
}


</style>