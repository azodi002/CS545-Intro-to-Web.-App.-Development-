<?php

/*
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
*/

function validate_data($params) {
    $msg = "";
    if(strlen($params[0]) == 0)
        $msg .= "Please enter the First Name<br />";  

    if(strlen($params[2]) == 0)
        $msg .= "Please enter the Last Name<br />"; 

    if(strlen($params[3]) == 0)
        $msg .= "Please enter the Address<br />";                        
 
    if(strlen($params[5]) == 0)
        $msg .= "Please enter the City<br />";
    if(strlen($params[6]) == 0)
        $msg .= "Please enter the State<br />";

    if(strlen($params[7]) == 0) {
        $msg .= "Please enter the Zipcode<br />";
    } 
    else
    {
        if(!is_numeric($params[7]))
            $msg .= "Zip code may only contain numeric values <br />";
    }

    if(strlen($params[8]) == 0)
        $msg .= "Please enter the Phone #<br />";

    if(strlen($params[9]) == 0)
        $msg .= "Please enter the Email<br />";
    else
    {
        if(!filter_var($params[9], FILTER_VALIDATE_EMAIL))
            $msg .= "Email is invalid <br />";
    }

    if(strlen($params[10]) == 0)
        $msg .= "Please enter the Gender<br />";

    if(strlen($params[11]) == 0)
        $msg .= "Please enter the Month<br />";
    if(strlen($params[12]) == 0)
        $msg .= "Please enter the Day<br />";
    if(strlen($params[13]) == 0)
        $msg .= "Please enter the Year<br />";

    if(strlen($params[15]) == 0)
        $msg .= "Please enter the Expertise level<br />";
    if(strlen($params[16]) == 0)
        $msg .= "Please enter the Age group<br />";
    if(strlen($params[17]) == 0)
        $msg .= "Please submit a Picture File<br />";
  
    if($msg) {
        write_form_error_page($msg);
        exit;
        }
    } //validate_data()
  
function write_form_error_page($msg) {
    write_header();
    echo "<h2>Sorry, an error occurred<br />",
    $msg,"</h2>";
    write_form();
    write_footer();
    }  
    
function write_form() {
    print <<<ENDBLOCK
	 <h1 id = "sign_up_title">San Diego State Marathon Sign up</h1>
     <h3 id="status">&nbsp;</h3>
     <hr/>
     <div id = "form_wrapper">
        <div id = "inner_form_wrapper">
        <form action="process_request.php" name = "customer" id = "customer_form" method="post">
            <!-- First Name -->
            <b> First Name</b> <sup id = "fname_required"> *</sup> : <input type = "text" class = "name" name = "fname" value="$_POST[fname]">

            <!-- Middle Name -->
            <b> Middle Name </b> (Opt.): <input type = "text" class = "name" name = "middle_name" value ="$_POST[middle_name]">

            <!-- Last Name -->
            <b> Last Name </b> <sup id = "lname_required"> *</sup> :<input type = "text" class = "name" name = "last_name" value ="$_POST[last_name]"> <br />

            <!-- Address -->
            <b> Address </b> <sup id = "first_address"> *</sup> :<input type = "text" class = "address" name = "address_one" value ="$_POST[address_one]">

            <!-- Address 2-->
            <b> Address 2</b> (Opt.):<input type = "text" class = "address" name = "address_two" value ="$_POST[address_two]"> 

            <!-- City -->
            <b> City  </b> <sup id = "city_required"> *</sup> :<input type = "text" class = "address_others" name = "city"  value ="$_POST[city]">

            <!-- State -->
            <b> State (XY) </b> <sup id = "state_required"> *</sup> :<input type = "text" class = "address_others"  name = "state" maxlength = "2" value ="$_POST[state]"> <br/>

            <!-- Zipcode -->
            <b> Zipcode </b> <sup id = "zipcode_required"> *</sup> :<input type = "text" class = "address_others"  name = "zipcode" maxlength = "5" value ="$_POST[zipcode]"> <br/>

            <!-- Phone -->
            <b> Phone ( XXX-XXX-XXXX )</b> <sup id = "phone_required"> *</sup>: <input type = "tel" class = "contact_info" name = "phone"  value ="$_POST[phone]"> <br/>

            <!-- Email -->
            <b> Email </b> <sup id = "email_required"> *</sup>: <input type = "email" class = "contact_info" name = "email"  value ="$_POST[email]"> <br/>
            
            <!-- Gender dropdown menu -->
            <b>Gender</b> <sup id = "gender_required"> * </sup>:
            <select name = "gender" id = "gender">
              <option value ="$_POST[gender]"> $_POST[gender]</option>
              <option value="unknown_gender">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select> <br /> <br />

            <!-- Date of Birth-->
            <b><u>Date of Birth (MM/DD/YYYY)</u> </b>:<br/>
            <!-- Month dropdown menu-->
            <b> Month: </b>
            <select name = "month" id = "month">
              <option value="$_POST[month]">$_POST[month]</option>
              <option value="unknown_month">Select</option>
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
              <option value="sep">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dev">December</option>
            </select> 

            <!-- Day dropdown menu-->
            <b> Day: </b>
            <select name = "day" id = "day">
              <option value="$_POST[day]">$_POST[day]</option>
              <option value="unknown_day">Select</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
                  <option value="31">31</option>
                </select> 

            <b> Year: </b>
            <select name = "year" id = "year">
                <option value="$_POST[year]">$_POST[year]</option>
                <option value="unknown_year">Select</option>
                <option value="1917">1917</option>
                <option value="1918">1918</option>
                <option value="1919">1919</option>

                <option value="1920">1920</option>
                <option value="1921">1921</option>
                <option value="1922">1923</option>
                <option value="1924">1924</option>
                <option value="1925">1925</option>
                <option value="1926">1926</option>
                <option value="1927">1927</option>
                <option value="1928">1928</option>
                <option value="1929">1929</option>

                <option value="1930">1930</option>
                <option value="1931">1931</option>
                <option value="1932">1932</option>
                <option value="1933">1933</option>
                <option value="1934">1934</option>
                <option value="1935">1935</option>
                <option value="1936">1936</option>
                <option value="1937">1937</option>
                <option value="1938">1938</option>
                <option value="1939">1939</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>

                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>

                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>

                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>

                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>

                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>

                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>

                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2017">2017</option>
            </select> <br/> <br/>

            <!-- Medical Conditions -->
            <b> <u>Medical Condition</u></b> (Opt.):<br/>
             <input type = "checkbox" name = "medical_condition" class = "med" value = "deaf"> Deaf <br/>
             <input type = "checkbox" name = "medical_condition" class = "med" value = "blind"> Blind <br/>
             <input type = "checkbox" name = "medical_condition" class = "med" value = "disabled"> Disabled <br/>
             <input type = "checkbox" name = "medical_condition" class = "med" value = "Other"> Other <br/>
            
            
            <!-- Expertise  Radio Button-->
            <b><u>Expertise</u></b><sup id = "expertise_required">*</sup>: <br/>
             <input type = "radio" name = "expertise" id = "exp1" value = "Novice"> Novice <br/>
             <input type = "radio" name = "expertise" id = "exp2" value = "Experienced"> Experienced<br/>
             <input type = "radio" name = "expertise" id = "exp3" value = "Expert"> Expert <br/> <br/>

            <!-- Age Group  Radio button-->
            <b><u>Age Group</u></b> <sup id = "age_group_required"> *</sup>:<br>
            <input type = "radio" name = "age_group" value = "teen"> Teen <br/>
            <input type = "radio" name = "age_group" value = "adult"> Adult <br/>
            <input type = "radio" name = "age_group" value = "senior"> Senior <br/> <br/>

            <b> Upload Image: </b> <input type = "file" name = "pic" id = "pic" value = "$_POST[pic]" accept = "image/*"> <br/> <br/>

            <div class="submit_button">
                <input type="submit" id = "validate_button" value="Submit" />
            </div>   
        </form>
    </div>
    </div>
ENDBLOCK;
}                        

function process_parameters($params) {
    global $bad_chars;
    $params = array();
    $params[] = trim(str_replace($bad_chars, "",$_POST['fname']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['middle_name']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['last_name']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['address_one']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['address_two']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['city']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['state']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['zipcode']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['phone']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['email']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['gender']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['month']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['day']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['year']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['medical_condition']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['expertise']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['age_group']));
    $params[] = trim(str_replace($bad_chars, "",$_POST['pic']));
    return $params;
    }
    
function store_data_in_db($params) {
    # get a database connection
    $db = get_db_handle();  ## method in helpers.php
    ##############################################################
    $sql = "SELECT * FROM person WHERE ".
    "email = '$params[9]';";


##echo "The SQL statement is ",$sql;    
    $result = mysqli_query($db, $sql);
    if(mysqli_num_rows($result) > 0) {
        write_form_error_page('This record appears to be a duplicate');
        exit;
        }
##OK, duplicate check passed, now insert
    $sql = "INSERT INTO person(fname,mname,lname,firstAddress,secondAddress,city,state,zip,phone,email,gender,month,day,year,medicalCondition,expertise,agegroup,image) ".
    "VALUES('$params[0]','$params[1]','$params[2]','$params[3]','$params[4]', '$params[5]','$params[6]','$params[7]','$params[8]','$params[9]','$params[10]','$params[11]','$params[12]','$params[13]','$params[14]','$params[15]','$params[16]','$params[17]');";
##echo "The SQL statement is ",$sql;    
    mysqli_query($db,$sql);
    $how_many = mysqli_affected_rows($db);
    //echo("There were $how_many rows affected");
    close_connector($db);
    }
        
?>   