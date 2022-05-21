<template>
    <div class="canvas">
        <div id="top">
            <div id="divProfilePicture">
                <img id="profilePicture" src=".\profilna2.jpg" alt="profilna">
            </div>
            <div id="info">
                username : {{username}} <br>
                email : {{email}} <br>
                status : {{status}}
            </div>
        </div>
        <div id="aboutMe">
            About me: <br>
            <div id="txt">{{aboutMe}}</div>
        </div>
        <div id="points">
            <p class="pointsName" style="text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);">
                Total score:  <span style="float:right;">{{totalScore}}</span>
            </p>
            <p class="pointsName" style="text-align:left; border-bottom: 1.2px solid rgba(0, 0, 0, 0.751);">
                High score:  <span style="float:right;">{{highScore}}</span>
            </p>
        </div>
    </div>
</template>

<ProfileCanvasComponent username="ivasljiva" email="ivaarakic@yahoo.com" status="Gold"
  aboutMe="Text text text.........." totalScore="2500" highScore="1200" profilePicture=".\profilna2.jpg"></ProfileCanvasComponent>

<script>
export default {
    name : 'ProfileCanvasComponent',
    props:[
        'username', 'email', 'status', 'aboutMe', 'totalScore', 'highScore', 'profilePicture'
    ]
}
</script>

<style scoped>
.canvas {
    position:relative;
    z-index: 1;
    margin: 0 auto;
    width: 20%;
    height: 400px; 
    background-color: white;
    border-radius: 2em;
    overflow: hidden;
}
#top{
    display: flex;
    flex-direction: row;
    margin-top: 8%;
    margin-left: 8%;
    margin-bottom: 3%;
}
#divProfilePicture{
    width: 25%;
    margin-right: 10%;
}
#profilePicture{
    max-width:100%;
    height:auto;
    border: 2.5px solid #F178B6;
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
#points{
    color: rgba(0, 0, 0, 0.751);
    font-size: 18px;
    font-weight: 600;
    margin-left: 8%;
    margin-right: 8%;
}
</style>