const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const thanks = document.getElementById('thanks');
//const input = document.querySelector('input');

form.addEventListener('submit', e => {
	e.preventDefault();
	if (checkInputs() == true) {
		thanks.innerText = username.value.trim();
		social_panel_container.classList.toggle('visible');	
		document.getElementById("but").disabled = true;
	/*
		form.style.background = "#c3d5d5";
		username.style.background = "#c3d5d5";
		email.style.background = "#c3d5d5";
		password.style.background = "#c3d5d5";
		password2.style.background = "#c3d5d5";
	*/	
	} 
})

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
    //check usename:
	if(usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
		return false;
	} else {
		setSuccessFor(username);
	}

	//check email:
	if(emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
		return false;
	} else {
		setSuccessFor(email);
	}

	//check password:
	if(passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
		return false;
	} else if (passwordValue.length < 6) {
		setErrorFor(password, "Password must have at least 6 characters");
		return false;
	} 
	else {
		setSuccessFor(password);
	}

	//check password2:
	if (password2Value !== passwordValue) {
		setErrorFor(password2, "password does not match");
		return false;
	} else if (password2Value === "") {
		setErrorFor(password2, "Password cannot be blank");
		return false;
	} else {
		setSuccessFor(password2);
	}
	return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentNode;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentNode;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// slide in message


const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');



close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible');
	document.getElementById("but").disabled = false;
		/*
		form.style.background = "white";
		username.style.background = "white";
		email.style.background = "white";
		password.style.background = "white";
		password2.style.background = "white";
		*/
});
