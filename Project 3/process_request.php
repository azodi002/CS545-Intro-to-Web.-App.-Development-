<?php

/*
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
*/


include('helpers.php');
include('p3.php');

check_post_only();
$params = process_parameters(); //done
validate_data($params); //done
store_data_in_db($params);

include('confirmation.php');
?>    