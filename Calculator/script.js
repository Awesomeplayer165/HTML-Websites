function add() {
    const a = Number(document.getElementById("value1").value)
    const b = Number(document.getElementById("value2").value)

    document.getElementById("result").innerHTML = `Result: ${a + b}`
}

function subtract() {
    const a = Number(document.getElementById("value1").value)
    const b = Number(document.getElementById("value2").value)

    document.getElementById("result").innerHTML = `Result: ${a - b}`
}

function divide() {
    const a = Number(document.getElementById("value1").value)
    const b = Number(document.getElementById("value2").value)

    document.getElementById("result").innerHTML = `Result: ${a / b}`
}

function multiply() {
    const a = Number(document.getElementById("value1").value)
    const b = Number(document.getElementById("value2").value)

    document.getElementById("result").innerHTML = `Result: ${a * b}`
}