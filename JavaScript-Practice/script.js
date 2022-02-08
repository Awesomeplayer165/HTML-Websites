function myFunction() {
    document.getElementById("demo").innerHTML = "JavaScript can make this light bulb glow."
}

function toggleBulbState() {
    if (bulb.getAttribute("src") == "bulbOn.png") {
        document.getElementById("bulb").src = "bulbOff.png"
        document.getElementById("status").innerHTML = "OFF"
    } else {
        document.getElementById("bulb").src = "bulbOn.png"
        document.getElementById("status").innerHTML = "ON"
    }
}