// extract values from URL: 

// ThankYou.html?firstname=sadf&lastname=sdasf&birth-date=2022-01-12&Submit=Submit

const UrlParam = new URLSearchParams(window.location.search)

if (!(UrlParam.get("firstname") && UrlParam.get("lastname"))) {

}

document.getElementById("combinedname").innerHTML = `Thank you, ${UrlParam.get("firstname")} ${UrlParam.get("lastname")}`
