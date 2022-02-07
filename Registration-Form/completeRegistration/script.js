const UrlParam = new URLSearchParams(window.location.search)

document.getElementById("username").value = UrlParam.get("username")
document.getElementById("email").value    = UrlParam.get("email")