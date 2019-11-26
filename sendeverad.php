<?php
// if(preg_match("/^[0-9]{10,10}+$/", $_POST['tel'])) $_POST['tel'] = "7".$_POST['tel'] ;
      $cd = stripslashes($_POST['phone']);
      $na = stripslashes($_POST['name']);

// Show the msg, if the code string is empt
{
    $file = fopen("valgucream.txt", "a+");
    fwrite($file, $cd."\n");

    fclose($file);
}   
       
$order = array (
	'campaign_id' => '912154',
	'ip' => $_SERVER['HTTP_REFERER'],
	'name' => $_REQUEST['name'],
	'phone' => $_POST['phone'],
	'sid1' => $_REQUEST['subid1'],
	'sid2' => $_REQUEST['subid2'],
	'sid3' => $_REQUEST['subid3'],
	'sid4' => $_REQUEST['subid4'],
	'sid5' => $_REQUEST['subid5']
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://tracker.everad.com/conversion/new" );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query($order) );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));

$result=curl_exec ($ch);

if ($result === 0) {
	echo "Timeout! Everad CPA 2 API didn't respond within default period!";
} else {
	$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	if ($httpCode === 200) {
		echo "Good! Order accepted!";
	} else if ($httpCode === 400) {
		echo "Order data is invalid! Order is not accepted!";
	} else {
		echo
		"Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
	}
}
?>