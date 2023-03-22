function reponse(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    var reponseRequette = this.responseText;
	}
    };
    xhttp.open("GET", "../htbin/login.py", true);
    xhttp.send();
}

document.getElementById("connect").addEventListener("click", (evt) => reponse());
