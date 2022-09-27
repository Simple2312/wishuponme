var email = document.forms['form']['email'];
var text = document.forms['form']['text'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
text.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 6) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (text.value.length < 6) {
		text.style.border = "1px solid red";
		pass_error.style.display = "block";
		text.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (text.value.length >= 5) {
		text.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
		
		
	}
	
	
}

