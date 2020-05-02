// * Team one declarations * //
let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneShots = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")

// * Team two declarations * //
let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoShots = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")

// * Reset declarations * //
let gameReset = document.querySelector("#reset-button")
let resetCount = document.querySelector("#num-resets")

teamOneShoot.addEventListener("click", function () {
    let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 10);
    if (x % 2 == 0) {
        x = Number(teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = x
    }

    teamOneShots.innerHTML = newTeamOneShots;
})

teamTwoShoot.addEventListener("click", function () {
    let newTeamTwoShots = Number(teamTwoShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 10);
    if (x % 2 == 0) {
        x = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = x
    }

    teamTwoShots.innerHTML = newTeamTwoShots;
})

gameReset.addEventListener("click", function () {
    let newResetCount = Number(resetCount.innerHTML) + 1;

    teamOneShots.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;
    resetCount.innerHTML = newResetCount;
})