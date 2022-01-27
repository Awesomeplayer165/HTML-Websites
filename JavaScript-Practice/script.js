function myFunction() {
    document.getElementById("demo").innerHTML = "JavaScript can make this light bulb glow"
}

function toggleBulbState() {
    const bulb = document.getElementById("bulb")
    bulb.src = (bulb.getAttribute("src") == "bulbOn.png") ? "bulbOff.png" : "bulbOn.png"
}