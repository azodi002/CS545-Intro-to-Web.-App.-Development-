/*
      Azodi, Omid
      jadrn005
      Project #2
      Fall 2017
 */

var error_message = 
[
'First Name not valid',
'Middle Name not valid', //should never print out
'Last Name not valid',
'Address field not valid',
'Address two field not valid', //should never print out
'City field not valid',
'State field not valid',
'Zipcode field not valid',
'Phone field not valid',
'Email field not valid',
'Gender field not valid',
'Month field not valid',
'Day field not valid',
'Year field not valid',
'Medical condition field not valid',//should never print out
'Expertise field not valid',
'Age group field not valid'
];

$(document).ready(function() {

	var h = new Array(18);
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

	
	h[0].focus();	
	
	$(':submit').on('click',function() {

	    return validateForm();
	});
	  
	    
	function validateForm() 
	{
	 	for(var i=0; i<17; i++) 
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

	 		if(i == 9)
	 		{
	 			//email is required
	 			if(!isValidEmail(h[i].val()))
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//if the email is empty
	 			if(!$.trim(h[i].val())) 
 				{
 					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
		    	}

	 		}

	 		if(i == 10)
	 		{
	 			var answer = document.getElementById("gender");
	 			//meaning no gender was selected other than default
	 			if(answer.value == "unknown_gender")
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//otherwise it is valid, 
	 			//it is a dropdown so all
	 			//selections are valid
	 		}

	 		if(i == 11)
	 		{
	 			var answer = document.getElementById("month");
	 			//meaning no gender was selected other than default
	 			if(answer.value == "unknown_month")
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//otherwise it is valid, 
	 			//it is a dropdown so all
	 			//selections are valid

	 		}

	 		if(i == 12)
	 		{
	 			var answer = document.getElementById("day");
	 			//meaning no gender was selected other than default
	 			if(answer.value == "unknown_day")
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//otherwise it is valid, 
	 			//it is a dropdown so all
	 			//selections are valid

	 		}

	 		if(i == 13)
	 		{
	 			var answer = document.getElementById("year");
	 			//meaning no gender was selected other than default
	 			if(answer.value == "unknown_year")
	 			{
	 				$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
	 			}

	 			//otherwise it is valid, 
	 			//it is a dropdown so all
	 			//selections are valid

	 		}

	 		if(i == 15)
	 		{
	 			//expertise
				var radios = document.querySelectorAll('input[name = expertise]:checked');
				var value = radios.length>0? radios[0].value: null;

				if(!value)
				{
					//was null
					//nothing selected
					//for expertise radio buttons
					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
				}
	 		}

	 		if(i == 16)
	 		{
	 			//expertise
				var radios = document.querySelectorAll('input[name = age_group]:checked');
				var value = radios.length>0? radios[0].value: null;

				if(!value)
				{
					//was null
					//nothing selected
					//for expertise radio buttons
					$('#status').text(error_message[i]);
		    		h[i].focus();
		    		status = false;
		    		return false;
				}
	 		}



	 		if(status && i == 0) {
		 		document.getElementById("fname_required").style.color = "green";
		 	}

		 	if(status && i == 2) {
		 		document.getElementById("lname_required").style.color = "green";
		 	}

		 	if(status && i == 3) {
		 		document.getElementById("first_address").style.color = "green";
		 	}

		 	if(status && i == 5) {
		 		document.getElementById("city_required").style.color = "green";
		 	}

		 	if(status && i == 6) {
		 		document.getElementById("state_required").style.color = "green";
		 	}

		 	if(status && i == 7) {
		 		document.getElementById("zipcode_required").style.color = "green";
		 	}

		 	if(status && i == 8) {
		 		document.getElementById("phone_required").style.color = "green";
		 	}

		 	if(status && i == 9) {
		 		document.getElementById("email_required").style.color = "green";
		 	}

		 	if(status && i == 10) {
		 		document.getElementById("gender_required").style.color = "green";
		 	}

		 	if(status && i == 15) {
		 		document.getElementById("expertise_required").style.color = "green";
		 	}

		 	if(status && i == 16) {
		 		document.getElementById("age_group_required").style.color = "green";
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