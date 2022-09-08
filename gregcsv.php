<form method="post">
Name: <input type="text" name="name" />
<br />
Greetings: <input type="text" name="greet" />
<br />
<input type="submit" value="Submit" />
</form>

<?php

$filename = 'gregcsv.csv';

// show


// process form
if (isset($_POST['name'])) {
	$name = trim($_POST['name']);
	$greet = trim($_POST['greet']);
	
	/*
	// prevent sql injection
	$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
	$greet = filter_input(INPUT_POST, 'greet', FILTER_SANITIZE_STRING);
	*/
	
	// https://www.php.net/manual/en/function.fputcsv.php

	$oFile = file_get_contents($filename);
	$out = fopen($filename, 'c');
	fputcsv($out, array($name,$greet));
	fwrite($out, $oFile);
	fclose($out);
	
	echo 'added: ' . $name . ' - ' . $greet . '<br />';
}
?>