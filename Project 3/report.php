
<!--
      Azodi, Omid
      jadrn005
      Project #3
      Fall 2017
 -->

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Report Login</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />      
		 <link rel="stylesheet" href="mycssfile.css">           
<style type="text/css">
h1, h2 { text-align: center; 
		 color:blue;
	    }

input { margin: 5px; }
#message_line { color: red; }
</style>  
<script type="text/javascript">
if(!navigator.cookieEnabled) {
	alert("Cookies are disabled in your browser. " +
	      "You must enable cookies to use this application.");
	}  
</script>	           	
</head> 
<body id = "report_bgd">
<h1 id= "report_header">Report Login</h1>
<hr/>

<img src="sdsu_logo.png" id = "sdsu_logo" alt="SDSU Logo" /> 
<div id = "report_div">

<form method="post" 
      action="process_login.php"
      name="login">
<p class = "password">
Password: <input type="password" name="pass" /><br />
</p>
<p class = "password">
<input type="reset" value="Clear" />
<input type="submit" value="Log In" />
</p>
</form>
</div>
<script type="text/javascript">
document.login.user.focus();
</script>
</body>
</html>