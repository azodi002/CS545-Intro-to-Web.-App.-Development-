<?php
    $UPLOAD_DIR = '_uploadDIR_/';
    $COMPUTER_DIR = '/home/jadrn005/public_html/proj3/_uploadDIR_/';
    $fnames = $_FILES['pic']['name'];
    $message = "";

        
    if($_FILES['pic']['error'] > 0) {
    	$err = $_FILES['pic']['error'];	
        $message .= "Error Code: $err ";
        }     
             
    else {
        move_uploaded_file($_FILES['pic']['tmp_name'], "$UPLOAD_DIR".$fnames);
        $message = "Success! Your file has been uploaded to the server</br >\n";
    }         
    echo $message;
?>  
