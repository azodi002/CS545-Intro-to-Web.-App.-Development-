/*
      Azodi, Omid
      jadrn005
      Project #4
      Fall 2017
 */


var error_message = 
[
'First Name not valid',
'a', //should never print out
'Last Name not valid',
'Address field not valid',
'Address two field not valid', //should never print out
'City field not valid',
'State field not valid',
'Zipcode field not valid',
'Phone field not valid',
'g',
'gg',
'ggg',
'gggg',
'gggggg',
'gsdfsdf',//should never print out
'Asdfsdf',
'Asdfsdfsdfsdf',
'sdsd',
'First Name not valid',
'Last Name not valid',
'Address not valid',
'Second address not valid',
'City not valid',
'State not valid',
'Zipcode not valid',
'Phone number not valid',
'Card not valid'
];

$(document).ready(function() {

	var h = new Array(27);
	h[0] = $('input[name="fname"]');	   
	h[1] = $('input[name="middle_name"]');
	h[2] = $('input[name="last_name"]');
	h[3] = $('input[name="address_one"]');			   
	h[4] = $('input[name="address_two"]');
	h[5] = $('input[name="city"]');

	h[6] = $('input[name="state"]');	   
	h[7] = $('input[name="zipcode"]');
	h[8] = $('input[name="phone"]');
	h[9] = $('input[name="email"]');			   
	h[10] = $('input[name="gender"]');
	h[11] = $('input[name="month"]');

	h[12] = $('input[name="day"]');	   
	h[13] = $('input[name="year"]');
	h[14] = $('input[name="medical_condition"]');
	h[15] = $('input[name="expertise"]');			   
	h[16] = $('input[name="age_group"]');
	h[17] = $('input[name="pic"]');

	h[18] = $('input[name="my_first"]');	   
	h[19] = $('input[name="my_last"]');
	h[20] = $('input[name="my_address"]');			   
	h[21] = $('input[name="my_saddress"]');
	h[22] = $('input[name="my_city"]');
	h[23] = $('input[name="my_state"]');
	h[24] = $('input[name="my_zip"]');
	h[25] = $('input[name="my_phone"]');
	h[26] = $('input[name="card"]');

	document.getElementById("go_back").onclick = function () {
        location.href = "order.html";
    };

$(document).on('click',$("[name='same_as_shipping']"), function(){shippingCheckbox(this.name);});
function shippingCheckbox(){
  if($("[name='same_as_shipping']").is(":checked")){
       h[18].val(h[0].val());
       h[19].val(h[2].val());
       h[20].val(h[3].val());
       h[21].val(h[4].val());
       h[22].val(h[5].val());
       h[23].val(h[6].val());
       h[24].val(h[7].val());
       h[25].val(h[8].val());
  }
  else{
       h[18].val("");
       h[19].val("");
       h[20].val("");
       h[21].val("");
       h[22].val("");
       h[23].val("");
       h[24].val("");
       h[25].val("");
  }
}  
	
	h[0].focus();	
	var x;
 	//var isError = true;
	$(':submit').on('click',function(e) {
	    x = validateForm();
		e.preventDefault();
		if(x)
		{
			location.href = "confirmation.html";
		}
	});

	function checkDuplicate(response) {
		if(response == "dup")
			$('#status').text("DUPLICATE PERSON");
		else if(response == "OK" && x) {
			$('form').serialize();
			$('form').submit();
		}
	}

	function validateForm() 
	{
	 	for(var i=0; i<27; i++) 
	 	{
	 		var status = true;

	 		if(i == 0 || i == 1 || i == 2) 
	 		{
	 			//first name, middle name (optional), last name
	 			//no need to validate middle name
	 			//some users might be mad that they have #'s
	 			//in the middle name. I only validate the
	 			//first name having #'s since that seems more realistic
	 			if(i == 0 || i == 2)
	 			{
	 				// validate first & last
	 				// if they are empty
	 				if(i == 0) 
	 				{
	 					if(hasNumber(h[i].val())) 
	 					{
	 						//first name contains a #
	 						// then deny the validation
	 						$('#status').text(error_message[i]);
			    			h[i].focus();
			    			status = false;
	 						return false;
	 					}
	 				}
	 				if(!$.trim(h[i].val())) 
	 				{
	 					$('#status').text(error_message[i]);
			    		h[i].focus();
			    		status = false;
			    		return false;
	 				}
	 			}
	 		}

	 		if(i == 3) 
	 		{
	 			//address, there is no way to check if
	 			//address is actually valid this would require
	 			//lots of details. it's best to let the user
	 			//enter mostly anything and only validation
	 			//on address one to be if it is not blank.
	 			//don't need to validate address two if
	 			//it isn't blank since there is no validation
	 			//for address one.
 				//if address is blank
 				if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}
	 		}

	 		if(i == 5)
	 		{
	 			//city
	 			var has_number = hasNumber(h[i].val());
	 			var has_symbol = hasSymbol(h[i].val());

	 			if(has_number || has_symbol)
	 			{
	 				status = false;
	 				h[i].focus();
	 				$('#status').text(error_message[i]);
	 				return false;
	 			}

	 			//if the city is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}

	 		}

	 		if(i == 6)
	 		{
	 			//state is required
	 			//maximum 2 already max is set
	 			//within the html of max 2
	 			//we do additional validation here
	 			if(!isValidState(h[i].val()))
	 			{
	 				//not a valid state
	 				status = false;
	 				h[i].focus();
	 				$('#status').text(error_message[i]);
	 				return false;

	 			}
	 			
	 			//if the state is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}

	 		}//(i==6)

	 		if(i == 7)
	 		{
	 			//zipcode is required
	 			if(!fiveDigits(h[i].val()))
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}
	 			
	 			//if the zipcode is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}
	 		}

	 		if(i == 8)
	 		{
	 			//phone number
	 			if(!validPhone(h[i].val()))
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//if phone empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}
	 		}


	 		if(i == 18)
	 		{
				if(hasNumber(h[i].val())) 
				{
					//first name contains a #
					// then deny the validation
					$('#status').text(error_message[i]);
    				h[i].focus();
    				status = false;
					return false;
				}
				// or first name not blank
				if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}	 				
	 		}



	 		if(i == 19)
	 		{
 				if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				} 				
	 		}

	 		if(i == 20)
	 		{
	 			//address
 				if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				} 				
	 		}


	 		if(i == 22)
	 		{
	 			//city
	 			var has_number = hasNumber(h[i].val());
	 			var has_symbol = hasSymbol(h[i].val());

	 			if(has_number || has_symbol)
	 			{
	 				status = false;
	 				h[i].focus();
	 				$('#status').text(error_message[i]);
	 				return false;
	 			}

	 			//if the city is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}				
	 		}

	 		if(i == 23)
	 		{
	 			//state is required
	 			//maximum 2 already max is set
	 			//within the html of max 2
	 			//we do additional validation here
	 			if(!isValidState(h[i].val()))
	 			{
	 				//not a valid state
	 				status = false;
	 				h[i].focus();
	 				$('#status').text(error_message[i]);
	 				return false;

	 			}
	 			
	 			//if the state is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
 				}

	 		}

	 		if(i == 24)
	 		{
	 			//zipcode is required
	 			if(!fiveDigits(h[i].val()))
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}
	 			
	 			//if the zipcode is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}
	 		}

	 		if(i == 25)
	 		{
	 			//phone number
	 			if(!validPhone(h[i].val()))
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//if phone empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}
	 		}

	 		if(i == 26)
	 		{
	 			//credit card, just check empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}
	 		}

	 		if(status && (i == 0 || i == 18)) {
		 		document.getElementById("fname_required").style.color = "green";
		 	}

		 	if(status && (i == 2 || i == 19)) {
		 		document.getElementById("lname_required").style.color = "green";
		 	}

		 	if(status && (i == 3 || i == 20)) {
		 		document.getElementById("first_address").style.color = "green";
		 	}

		 	if(status && (i == 5 || i == 22)) {
		 		document.getElementById("city_required").style.color = "green";
		 	}

		 	if(status && (i == 6 || i == 23)) {
		 		document.getElementById("state_required").style.color = "green";
		 	}

		 	if(status && (i == 7 || i == 24)) {
		 		document.getElementById("zipcode_required").style.color = "green";
		 	}

		 	if(status && (i == 8 || i == 25)) {
		 		document.getElementById("phone_required").style.color = "green";
		 	}

		}//end for loop
		return true;
	}

	function hasNumber(myString) {
		//referenced from: 
		//https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
  		return /\d/.test(myString);
	}

	function hasSymbol(myString)
	{
		for(var i = 0; i < myString.length; i++)
		{
			if(myString[i] == '$' || myString[i] == '@' || myString[i] == '#' || myString[i] == '~' || myString[i] == '*' || myString[i] == '%' || myString[i] == '^' || myString[i] == '(' || myString[i] == ')' || myString[i] == '&' || myString[i] == '-' || myString[i] == '+' || myString[i] == '=' || myString[i] == '_') 
			{
				return true;
			}	
		}

		return false;
	}

	function isValidState(state) 
	{           
		//user should be able to enter CA or ca 
		//so we take control on the backend to
		//not inconvenience the user in getting denied
		//for entering ca and not CA, both should be accepted
		state = state.toUpperCase();                     
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");

        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
     } 

     function fiveDigits(myString)
	{
		if(myString.length != 5)
		{
			return false;
		}

		var charCodeZero = "0".charCodeAt(0);
		var charCodeNine = "9".charCodeAt(0);
		for(var i = 0; i < myString.length; i++)
		{
			if(myString[i].charCodeAt(0) >= charCodeZero && myString[i].charCodeAt(0) <= charCodeNine)
				continue;
			else
				return false;
		}
		return true;
	}

	//Function reference from stackoverflow:
	//https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
	 function isValidEmail(emailAddress) 
	 {
        var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return emailCheck.test(emailAddress);
     }   

     function validPhone(phone)
     {

     	if(phone.length != 12)
     	{
     		//format must be 12 chars
     		// XXX-XXX-XXXXX
     		return false;
     	}
     	var charCodeZero = "0".charCodeAt(0);
		var charCodeNine = "9".charCodeAt(0);
     	//can assume 12 at this point
     	//with safety condition above
     	for(var i = 0; i < 12; i++)
     	{
     		if(i == 0 || i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 9 || i == 10 || i == 11)
     		{
     			if(phone[i].charCodeAt(0) >= charCodeZero && phone[i].charCodeAt(0) <= charCodeNine)
     				continue;
     			else 
     				return false;
     		}

     		if(i == 3 || i == 7)
     		{
     			if(phone[i] != '-')
     				return false;
     		}
     	}
     	return true;

     }//function validPhone

});