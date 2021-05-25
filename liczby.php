<?php
    
	$arg1 ="default value 1";
	$arg2 ="default value 2";

	$arg1 = $_GET["arg1"];
	$arg2 = $_GET["arg2"];

	if($arg1/2 != 0)
	{
		$arg1 +=1;
	}
	
    while ($arg1 <= $arg2){
	
        echo $arg1;
        $arg1 = $arg1+2;
        echo "<br>";
    }
	
	
?>