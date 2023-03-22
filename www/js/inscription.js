function check(){
    // returns true if every info is good, else false.
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let dateInput = document.getElementById("birthdate").value;
    let username = document.getElementById("username").value;
    let userpwd = document.getElementById("userpwd").value;
    let useremail = document.getElementById("useremail").value;

    let bool = true;

    standardText();

    // last name
    if(lastname == ""){
	document.getElementById("nom").innerHTML = "Nom : <strong>Champ obligatoire</strong>";
	bool = false;
    }

    // first name
    if(firstname == ""){
	document.getElementById("prenom").innerHTML = "Prénom : <strong>Champ obligatoire</strong>";
	bool = false;
    }

    // user name
    var reg_username = /.{6}.*/;
    if(username == ""){
	document.getElementById("pseudo").innerHTML = "Nom d'utilisateur : <strong>Champ obligatoire</strong>";
	bool = false;
    }
    else if(!(reg_username.test(username))){
	document.getElementById("pseudo").innerHTML = "Nom d'utilisateur : <br><em>Saisie invalide (au moins 6 caractères)</em>";
	bool = false;
    }

    // password
    var reg_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(userpwd == ""){
	document.getElementById("mdp").innerHTML = "Mot de passe : <strong>Champ obligatoire</strong>";
	bool = false;
    }
    else if(!(reg_pass.test(userpwd))){
	document.getElementById("mdp").innerHTML = "Mot de passe : <br><em>Saisie invalide (au moins 8 caractères dont une majuscule, une minuscule et un chiffre. Ex : MotDePasse1)</em>";
	bool = false;
    }

    // mail
    var reg_mail = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;
    if(useremail == ""){
	document.getElementById("mail").innerHTML = "Adresse e-mail : <strong>Champ obligatoire</strong>";
	bool = false;
    }
    else if(!(reg_mail.test(useremail))){
	document.getElementById("mail").innerHTML = "Adresse e-mail : <em>Adresse invalide</em>";
	bool = false;
    }

    //date
    if(dateInput != ""){
	let dateInvalid = false;
	
	let reg_date = /^\d{2}\/\d{2}\/\d{4}$/;
	if(!(reg_date.test(dateInput))){
	    dateInvalide = true;
	}
	else{ // if date validates the RegEx
	    let arrayDate = dateInput.split('/');
	    let date = new Date(parseInt(arrayDate[2]),parseInt(arrayDate[1])-1,parseInt(arrayDate[0]));
	    if(arrayDate[2] != date.getFullYear() || arrayDate[1] != date.getMonth() || arrayDate[0] != date.getDate()){
		// if the object Date changed the input : it was an invalid date
		dateInvalid = true;
	    }
	}

	if(dateInvalide){
	    document.getElementById("date").innerHTML = "Date de naissance : <br><em>Saisie invalide (format : jj/mm/aaaa)</em>";
	    bool = false;
	}
    }

    if(!(bool)){
	document.getElementById("submit").style.color = 'grey';
    }
    else{
	document.getElementById("submit").style.color = 'white';
    }
    

    document.getElementById("submit").disabled = !(bool);
}

function standardText(){
    document.getElementById("nom").innerHTML = "Nom *";
    document.getElementById("prenom").innerHTML = "Prénom *";
    document.getElementById("date").innerHTML = "Date de naissance";
    document.getElementById("pseudo").innerHTML = "Nom d'utilisateur *";
    document.getElementById("mdp").innerHTML = "Mot de passe *";
    document.getElementById("mail").innerHTML = "Adresse e-mail *";
}

standardText();
document.getElementById("submit").disabled = true;
document.getElementById("form").addEventListener("click", (evt) => check()); // to check info
