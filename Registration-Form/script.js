function startRegistration() {
    const username = document.getElementById("username")
    const email = document.getElementById("password")

    username.style = (!(username.value)) ? "border-color: red" : "clear"
    email.style    = (!(email.value))    ? "border-color: red" : "clear"
}