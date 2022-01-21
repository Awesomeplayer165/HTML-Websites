function checkForm() {
	const firstname  = document.getElementById("firstname")
	const lastname   = document.getElementById("lastname")
	const birthdate  = document.getElementById("birth-date")

	firstname.style = `border-color: ${(!(firstname.value)) ? "red" : "clear"}`
	lastname.style  = `border-color: ${(!(lastname.value))  ? "red" : "clear"}`
	birthdate.style = `border-color: ${(!(birthdate.value)) ? "red" : "clear"}`

	if (firstname.value && lastname.value && birthdate.value) {
		window.location.replace("/iFrame.html")
	}
}