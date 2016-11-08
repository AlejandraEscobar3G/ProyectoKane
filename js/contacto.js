function validateForm(){
	validateName();
	validateEmail();
	validateMsg();
}

function validateName(){
	var nombre = document.getElementById("usr").value;
	//var espacio = /^\s+$/;
	var regexNombre = /^[A-Z][a-z]*$/;
	//Validacion
	if(!(regexNombre.test(nombre))){
		alert("Campo nombre incorrecto");
		return false;
	}
	console.log("Name true");
	return true;
}

function validateEmail(){
	var correo = document.getElementById("email").value;
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	//Validación
	if(!(regexEmail.test(correo))){
		alert("Campo correo incorrecto");
		return false;
	}
	console.log("Email true");
	return true;
}

function validateMsg(){
	var textArea = document.getElementById("comment").value;
	if(textArea == 0 ){
		alert("Campo mensaje obligatorio");
		return false;
	}
	console.log("Message true");
	return true;
}