function finishSetup() {

    const teamOne   = document.getElementById("Team.One.Set")  .value
    const teamTwo   = document.getElementById("Team.Two.Set")  .value
    const teamThree = document.getElementById("Team.Three.Set").value

    if (!(teamOne && teamTwo && teamThree)) {
        
    }

    localStorage.setItem("Team.One.Name",   teamOne)
    localStorage.setItem("Team.Two.Name",   teamTwo)
    localStorage.setItem("Team.Three.Name", teamThree)

    window.location.href = `${window.location.origin}/Jeopardy/`
}

// const teamOne   = localStorage.getItem("Team.One.Name")
// const teamTwo   = localStorage.getItem("Team.Two.Name")
// const teamThree = localStorage.getItem("Team.Three.Name")

// if (teamOne && teamTwo && teamThree) {
// 	window.location.href = `${window.location.origin}/Jeopardy/`
// }