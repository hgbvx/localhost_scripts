<?php

	header("Content-Type: application/json");
	
	$arg1 ="default value 1";
	$arg2 ="default value 2";

	$arg1 = $_GET["arg1"];
	$arg2 = $_GET["arg2"];
	$tablica = [];
	$nr = 1;
	$liczba = "liczba:";
	
	if ($arg1/2 != 0 )
	{
		$arg1 += 1;
	}
	
	
	 while ($arg1 <= $arg2){
		$temp = $liczba.strval($nr);
		$tablica[$temp] = $arg1;
		$nr += 1;
		$arg1 +=2;
       
    }
	
	
	
	$response = json_encode($tablica);
	echo $response;
?>