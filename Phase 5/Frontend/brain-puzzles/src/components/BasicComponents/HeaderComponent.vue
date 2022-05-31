<template>
    <div class="headerContainer">
        <div class="headerLogoDiv">
            <img class="headerLogo" src="static/res/logo.png"  alt="logo slika">
        </div>
        <div class="headerText" style="color: rgba(0, 0, 0, 0.85);"> Brain Puzzles</div>
        <div class="headerLogOutDiv" @click="logoutClicked()">  
            <div>
                <img class="headerLogOut" src=".\logOut.png" alt="logOut">
                <br>
                Sign out
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        logoutClicked() {
            location.href = "/logout";
        }
    }
}
</script>

<style scoped>
.headerContainer {
    display: flex;
    flex-direction: row;

    background-color:white;
    height: 10vh;
    margin-top:-3%;

    padding-right: 5px;
}
.headerText {
    display: flex;
    justify-content: left;
    align-items: center;

    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 350;
    font-size: 2.5vw;

    letter-spacing: 0.04em;
    line-height: 1.3em;

    color:black;
    
    width: 100%;
    height: 100%;
}
.headerLogoDiv {
    width: 5%; 
}
.headerLogo {
    max-width:90%;
    height:auto;
}
.headerLogOutDiv {
    width: 5%; 

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75em;

    letter-spacing: 0.05em;

    color: rgba(0, 0, 0, 0.5);
}
.headerLogOutDiv:hover {
    cursor: pointer;
}
.headerLogOut {
    max-width:50%;
    height:auto;
}
</style>