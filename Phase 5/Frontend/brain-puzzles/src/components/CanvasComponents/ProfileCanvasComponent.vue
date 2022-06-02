<template>
    <div class="canvas">
        <div id="top">
            <div id="info">
                username : {{username}} <br>
                email : {{email}} <br>
                status : {{status}}
            </div>
        </div>
        <div id="aboutMe">
            About me: <br>
            <div id="txt" @dblclick="dbl()">
                <div class="slozi" :class="{prikazi:prikazi}">{{aboutMe}}</div>
                <textarea id="area" :class="{prikazi:!prikazi}" @keydown.enter="save($event)" cols="35" rows="8"></textarea>
            </div>
        </div>
        <div id="points">
            <p class="pointsName" style="text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);">
                Total score:  <span style="float:right;">{{this.totalScore}}</span>
            </p>
            <p class="pointsName" style="text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);">
                High score:  <span style="float:right;">{{this.highScore}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    name : 'ProfileCanvasComponent',
    props:[
        'username', 'email', 'status', 'aboutMe', 'profilePicture'
    ],
    
    data(){
        return{
            highScore: 0,
            totalScore: 0,
            prikazi : false,
        }
    },
    methods:{
        save(event) {
            event.preventDefault();
            document.getElementById('area').disabled = true;
            document.getElementById('area').disabled = false;
            let txt = document.getElementById('area').value;
            axios.post('/aboutme', {
                aboutMe : txt
            }).then(() => {
                location.reload();
                this.prikazi = !this.prikazi;
            })
        },
        dbl(){
            document.getElementById('area').value = this.aboutMe;
            this.prikazi = !this.prikazi;
        }
    },
    created() {
        axios.get('/scoreInfo', {}).then((response) => {
            this.highScore = response.data['highScore']
            this.totalScore = response.data['totalScore']


        })
    },
    
}

</script>

<style scoped>
.prikazi{
    visibility: hidden;
}
#area{
    background-color: white;
}
.slozi{
    position: absolute;
}

.canvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 22vw;
    height: 60vh; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.25);

}
#top{
    display: flex;
    flex-direction: row;
    margin-top: 6%;
    margin-left: 8%;
    margin-bottom: 3%;
}
#info{
    color: rgba(0, 0, 0, 0.317);
    font-size: 10px;
    font-weight: 700;
    text-align: left;
    line-height: 210%;
}
#aboutMe{
    color: rgba(0, 0, 0, 0.751);
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin-left: 8%;
    height: 50%;
}
#txt{
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.317);
    font-size: 10px;
}
#txt:hover{
    cursor: pointer;
}

#points{
    color: rgba(0, 0, 0, 0.751);
    font-size: 18px;
    font-weight: 600;
    margin-left: 8%;
    margin-right: 8%;
}
</style>