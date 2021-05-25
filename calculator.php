<?php

	header("Content-Type: application/json");
	include 'factorial.php';
	
	function add($parametr1, $parametr2)
	{
		$value = $parametr1 + $parametr2;
		return $value;
	}
	
	function substraction($parametr1, $parametr2)
	{
		$value = $parametr1 - $parametr2;
		return $value;
	}
	
	function multiply($parametr1, $parametr2)
	{
		$value = $parametr1 * $parametr2;
		return $value;
	}
	
	function divide($parametr1, $parametr2)
	{
		$value = $parametr1 / $parametr2;
		return $value;
	}
	
	
	$arg1 ="default value 1";
	$arg2 ="default value 2";
	$arg3 ="default value 3";

	if(isset($_GET["arg1"]))
		$arg1 = $_GET["arg1"];
	
	if(isset($_GET["arg2"]))
		$arg2 = $_GET["arg2"];
		
	if(isset($_GET["arg3"]))
		$arg3 = $_GET["arg3"];
	

	$tablica = [];

	if($arg1 == "dodawanie")
	{
		$temp = add($arg2,$arg3);
		$tablica[$arg1] = $temp;
	}
	
	if($arg1 == "odejmowanie")
	{
		$temp = substraction($arg2,$arg3);
		$tablica[$arg1] = $temp;
	}
	
	if($arg1 == "mnozenie")
	{
		$temp = multiply($arg2,$arg3);
		$tablica[$arg1] = $temp;
	}
	
	if($arg1 == "dzielenie")
	{
		$temp = divide($arg2,$arg3);
		$tablica[$arg1] = $temp;
	}
	
	if($arg1 == "silnia")
	{
		$temp = factorial($arg2);
		$tablica[$arg1] = $temp;
	}
	
	$response = json_encode($tablica);
	echo $response;
?>