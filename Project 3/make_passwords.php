<?php



/*
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
*/

if($_GET) exit;
if($_POST) exit;

$users = array('ariggins','cs545','smith','tester');
$pass = array('cs545','omid','azodi','sdsu');

#### Using SHA256 #######
$salt='$5$R$4%^agz%8h2ka26';  # 12 character salt starting with $1$

for($i=0; $i<count($users); $i++) 
        echo $users[$i].'='.crypt($pass[$i],$salt)."\n";
?>