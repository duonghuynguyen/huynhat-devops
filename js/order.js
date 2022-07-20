// JavaScript Document
function FillBilling(f) {
  if(f.sameadr.checked == true) {
    f.receivername.value = f.fullname.value;
    f.delivery_email.value = f.email.value;
	f.pnumber.value = f.bnumber.value;
    f.delivery_address.value = f.billing_address.value;
	f.delivery_country.value = f.country.value;
    f.delivery_city.value = f.city.value;
	f.delivery_zip_code.value = f.zip_code.value;
  }
}
function validate_order() {
	var delivery_type_pickup   = $("#delivery_type_pickup").prop("checked");
	var delivery_type_delivery = $("#delivery_type_delivery").prop("checked");

    var receivername  = $("#receivername").val();
    var delivery_email   = $("#delivery_email").val();
    var pnumber = $("#pnumber").val();
	var delivery_address  = $("#delivery_address").val();
	var delivery_country  = $("#delivery_country").val();
	var delivery_city  = $("#delivery_city").val();
	var delivery_zip_code  = $("#delivery_zip_code").val();

	var fullname = $("#fullname").val();
	var email = $("#email").val();
    var billing_address  = $("#billing_address").val();
    var country   = $("#country").val();
	var city   = $("#city").val();
    var zip_code = $("#zip_code").val();

	var payment_type_pickup = $("#payment_type_pickup").prop("checked");
	var payment_type_online = $("#payment_type_online").prop("checked");

	var cardname = $("#cardname").val();
	var cardnumber    = $("#cardnumber").val();
	var expmonth     = $("#expmonth").val();
	var expyear    = $("#expyear").val();
	var cvv       = $("#cvv").val();

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */


    // Check Delivery
    if ((delivery_type_delivery)) {
        if (delivery_address == "") {
            errMsg += "Delivery Address cannot be empty.\n";
        }

        if (receivername == "") {
            errMsg += "Receiver Name cannot be empty.\n";
        }
		if (delivery_email == "") {
            errMsg += "Delivery email cannot be empty.\n";
        }
		if (pnumber == "") {
            errMsg += "Phone number cannot be empty.\n";
        }
		if (delivery_country == "") {
            errMsg += "Delivery country cannot be empty.\n";
        }
		if (delivery_city == "") {
            errMsg += "Delivery city cannot be empty.\n";
        }

        if (delivery_zip_code == "") {
            errMsg += "Delivery zip code cannot be empty.\n";
        }

        if (delivery_zip_code.length != 6) {
            errMsg += "Delivery zip code code must be 6 digits long.\n";
        }
    }

	if (billing_address == "") {
		errMsg += "Billing Address cannot be empty.\n";
	}
	if (fullname == "") {
		errMsg += "Your Full Name cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if (country == "") {
		errMsg += "Billing Country cannot be empty.\n";
	}

	if (city == "") {
		errMsg += "Billing City cannot be empty.\n";
	}

	if (zip_code == "") {
		errMsg += "Billing zip code cannot be empty.\n";
	}

    if (zip_code.length != 6) {
        errMsg += "Billing zip code must be 6 digits long.\n";
    }

	if ((!delivery_type_pickup) && (!delivery_type_delivery)) {
		errMsg += "A Delivery type must be selected.\n";
	}

	if ((!payment_type_pickup) && (!payment_type_online)) {
		errMsg += "A Payment type must be selected.\n";
	}
	if ((payment_type_online)) {
		if (cardname == "") {
		errMsg += "Name on Card cannot be empty.\n";
	}
		if (cardnumber == "") {
		errMsg += "Credit card Number cannot be empty.\n";
	}
		if (expmonth == "") {
		errMsg += "Expired Month cannot be empty.\n";
	}
		if (expyear == "") {
		errMsg += "Expired Year code cannot be empty.\n";
	}
		if (cvv == "") {
		errMsg += "CVV cannot be empty.\n";
	}
		
	}

    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;
}


// }}}

function init() {
    $("#orderpage").submit(validate_order);
}

/* execute function init() once the window is loaded*/
$(document).ready(init);
