// JavaScript Document
/* write functions that define the action for each event */
function validate() {
    var username   = document.getElementById("username").value;
    var password1  = document.getElementById("password1").value;
    var password2  = document.getElementById("password2").value;
    var full_name = document.getElementById("full_name").value;
    var genm  = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
	var email =  document.getElementById("email").value;
	
    var errMsg = "";								/* stores the error message */
    var result = true;							    /* assumes no errors */
    var pattern = /^[a-zA-Z ]+$/;		            /* regular expression for letters and spaces only */

    /* Rule 1, check if all required inputs have value */
    if (username == "") {
        errMsg += "Username cannot be empty. \n";
    }

    if (password1 == "") {
        errMsg += "Password cannot be empty.\n";
    }

    if (password2 == "") {
        errMsg += "Retype password cannot be empty. \n";
    }
	
	if (password1.length < 6) {
        errMsg += "Password must be at least 6 characters long. \n";
    }
	
	if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }

    if (full_name == "") {
        errMsg += "Full name cannot be empty. \n";
    }

    if ((genm == "") && (genf == "")) {
        errMsg += "A gender must be selected. \n";
    }

    /* Rule 2, check if the user ID contains an @ symbol  */
    if (username.indexOf('@') == 0 ) {
        errMsg += "Username cannot start with an @ symbol. \n";
    }


    /* Rule 3, check if password and retype password are the same */
    if (password1 != password2) {
        errMsg += "Passwords do not match.\n";
    }

    /* Rule 4, check if user name contains only letters and spaces */
    if (! full_name.match (pattern)) {
        errMsg += "Full name must not contain symbols.\n";
    }

    /* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert (errMsg);
        var result = false;
    }
    return result;
}

/* link HTML elements to corresponding event function */
function init () {
    var registrationpage = document.getElementById("registrationpage");
    registrationpage.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;
$(document).ready(init);
