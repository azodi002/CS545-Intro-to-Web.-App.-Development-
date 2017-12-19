<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Person Report</title>
    <link rel="stylesheet" href="report.css">

</head>
<body>
    <h1>Participants Report</h1>
<?php
/*
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
*/

$server = 'opatija.sdsu.edu:3306';
$user = 'jadrn005';
$password = 'roma';
$database = 'jadrn005';
if(!($db = mysqli_connect($server,$user,$password,$database)))
    echo "ERROR in connection ".mysqli_error($db);
else {
    $sql = "select * from person order by lname, agegroup;";    
    $result = mysqli_query($db, $sql);
    if(!result)
        echo "ERROR in query".mysqli_error($db);
    echo "<table>\n";
    echo
   
"<tr><td>First Name</td><td>Last Name</td><td>Expertise</td><td>Age Group</td><td>Age</td><td>Image</td></tr>";
    while($row=mysqli_fetch_row($result)) {
        echo "<tr>";
            for($x = 0; $x < 18; $x++) {
                if($x == 0) {               
                    echo "<td>$row[0]</td>";
                }

                if($x == 2) {
                    echo "<td>$row[2]</td>";
                }                
                
                if($x == 15) {
                    echo "<td>$row[15]</td>";
                }

                if($x == 16) { //age group
                    echo "<td>$row[16]</td>";
                }

                if($x == 16) { //for the age
                    $person_year = $row[13]; //13 is index of person year born
                    $age = 2017 - $person_year;
                    echo "<td>$age</td>";
                }

                if($x == 17) {
                    echo "<td>$row[17]</td>";
                }
            } //for($x = 0)
        echo "</tr>\n";
        }
    mysqli_close($db);
    }
?>
</table>
</body>
</html>