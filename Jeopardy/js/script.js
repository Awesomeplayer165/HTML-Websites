function submit(subject, points) {
	// window.location.href = `${window.location.origin}/Jeopardy/Question/?s=${subject}&p=${points}`
	document.getElementById(`${subject},${points}`).style.visibility = "hidden"
	document.getElementById("DisplayQuestion").src = `${window.location.origin}/Jeopardy/Question/?s=${subject}&p=${points}`
}

function reset() {
	localStorage.clear()
	window.location.href = `${window.location.origin}/Jeopardy/Setup`
}

function addPoints(teamNumber, isStarting = false) {
	const currentPointValue = Number(localStorage.getItem("currentPointValue"))

	if (currentPointValue) {
		const pointLabel = document.getElementById(`Team.Points.${teamNumber}`)
		pointLabel.innerHTML = `Points: ${Number(pointLabel.innerHTML.slice("8")) + currentPointValue}`
		
		if (isStarting) {
			localStorage.setItem(`Team.Points.${teamNumber}`, Number(pointLabel.innerHTML.slice("8") + currentPointValue))
		}
	} else {
		console.log("Nothing to add... No Point Value")
	}
}

const teamOne   = localStorage.getItem("Team.One.Name")
const teamTwo   = localStorage.getItem("Team.Two.Name")
const teamThree = localStorage.getItem("Team.Three.Name")

if (!(teamOne && teamTwo && teamThree)) {
	window.location.href = `${window.location.origin}/Jeopardy/Setup`
}

document.getElementById("Team.Name.One")  .innerHTML = `Name: ${teamOne}`
document.getElementById("Team.Name.Two")  .innerHTML = `Name: ${teamTwo}`
document.getElementById("Team.Name.Three").innerHTML = `Name: ${teamThree}`


if (localStorage.getItem("Team.Points.1")) {
	document.getElementById("Team.Points.1").innerHTML = `Points: ${localStorage.getItem("Team.Points.1")}`
}
if (localStorage.getItem("Team.Points.2")) {
	document.getElementById("Team.Points.2").innerHTML = `Points: ${localStorage.getItem("Team.Points.2")}`
}

if (localStorage.getItem("Team.Points.3")) {
	document.getElementById("Team.Points.3").innerHTML = `Points: ${localStorage.getItem("Team.Points.3")}`
}

if (localStorage.getItem("s") && localStorage.getItem("p")) {
	document.getElementById("DisplayQuestion").src = `${window.location.origin}/Jeopardy/Question/`
}