<!DOCTYPE html>


<html>

<head>
    <meta charset="utf-8"/>
    <title>Confirmation SDSU</title>
<link rel="stylesheet" type="text/css" href="mycssfile.css" />
    
</head>


<body id = "confirm_body">
<?php

/*
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
 */
 
$month = strtoupper($params[11]);
echo <<<ENDBLOCK
    <h1 id = "confirm_message">$params[0] $params[2], thank you for registering for SDSU Marathon.</h1>
    <table id = "confirm_table">
        <tr class = "confirm_row">
            <td class = "table_settings">Address</td>
            <td class = "table_settings">$params[3]</td>
        </tr>
        <tr class = "confirm_row">
            <td class = "table_settings">City</td>
            <td class = "table_settings">$params[5]</td>
        </tr>
        <tr class = "confirm_row">
            <td class = "table_settings">State</td>
            <td class = "table_settings">$params[6]</td>
        </tr>
        <tr class = "confirm_row">
            <td class = "table_settings">Zip Code</td>
            <td class = "table_settings">$params[7]</td>
        </tr>
        <tr class = "confirm_row">
            <td class = "table_settings">Phone</td>
            <td class = "table_settings">$params[8]</td>
        </tr>    
        <tr class = "confirm_row">
            <td class = "table_settings">Email</td>
            <td class = "table_settings">$params[9]</td>
        </tr>   
        <tr class = "confirm_row">
            <td class = "table_settings">Gender</td>
            <td class = "table_settings">$params[10]</td>
        </tr>   
        <tr class = "confirm_row">
            <td class = "table_settings">Date of Birth</td>
            <td class = "table_settings"> $month. $params[12]/$params[13]</td>
        </tr>   
        <tr class = "confirm_row">
            <td class = "table_settings">Medical Conditions</td>
            <td class = "table_settings">$params[14]</td>
        </tr>  
        <tr class = "confirm_row">
            <td class = "table_settings">Expertise</td>
            <td class = "table_settings">$params[15]</td>
        </tr>   
        <tr class = "confirm_row">
            <td class = "table_settings">Age Group</td>
            <td class = "table_settings">$params[16]</td>
        </tr>  
        <tr class = "confirm_row">
            <td class = "table_settings">Image</td>
            <td class = "table_settings">$params[17]</td>
        </tr>  
    </table>                          
ENDBLOCK;


/*echo "<p>The raw query string that came from the browser is ",
    file_get_contents("php://input"),"</p>";*/

?>
</body></html>