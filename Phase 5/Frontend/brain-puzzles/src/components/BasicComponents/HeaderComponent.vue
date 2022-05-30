<template>
    <div class="cont">
        <div class="divLogo"><img class="logo" src="static/res/logo.png"  alt="logo slika"></div>
        <div class="divTxt" style="color: rgba(0, 0, 0, 0.85);"> Brain Puzzles</div>
        <div class="divLogOut" @click="logoutClicked()">  
                <img class="logOut" src=".\logOut.png" alt="logOut">
        </div>
    </div>
</template>


<script>
export default {
    name: 'HeaderComponent',
    props: [
    ],
    methods:
    {
        logoutClicked() {
            location.href = "/logout"
        },
    }
}
</script>

<style scoped>
.cont {
    display: flex;
    flex-direction: row;
    background-color:white;
    height: 10vh;
    margin-top:-2%;
}
.divLogo{
    width: 5%; 
    /* margin-top: 1%; */
}
.logo {
    max-width:90%;
    height:auto;
}
.divLogOut{
    width: 2%; 
    margin-top: 1.2%;
}
.divLogOut:hover{
    cursor: pointer;

}
.logOut {
    max-width:100%;
    height:auto;
}
.divTxt {
    text-align: left;
    position: relative;
    top:20%;
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 350;
    font-size: 2.5vw;
    letter-spacing: 0.04em;
    color:black;
    margin-bottom: 0;
    line-height: 1.3em;
    width: 90%;
}
</style>