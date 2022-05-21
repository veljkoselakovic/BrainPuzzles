<template>
    <div class="cont">
        <div class="divLogo"><img class="logo" src=".\logo.jpg" alt="logo slika"></div>
        <div class="divTxt"> Brain Puzzles</div>
        <div class="divLogOut">  
            <router-link to="/register">
                <img class="logOut" src=".\logOut.png" alt="logOut">
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HeaderComponent',
    props: [
    ]
}
</script>

<style scoped>
.cont {
    display: flex;
    flex-direction: row;
    background-color:white;
    height: 13vh;
}
.divLogo{
    width: 6%; 
    margin-top: 1%;
}
.logo {
    max-width:100%;
    height:auto;
}
.divLogOut{
    width: 2%; 
    margin-top: 1.8%;
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
    font-size: 3vw;
    letter-spacing: 0.04em;
    color:black;
    margin-bottom: 0;
    line-height: 1.3em;
    width: 90%;
}
</style>