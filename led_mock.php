<?php

$response = $_POST['json'];
$json_response = json_decode($response);

$index = $json_response-> index;
$red = $json_response-> red;
$green = $json_response-> green;
$blue = $json_response-> blue;

$myfile = fopen("json_led.txt","a") or die ("Unable to open file!");

fwrite($myfile, "[$index,$red,$green,$blue],");



fclose($myfile);
?>