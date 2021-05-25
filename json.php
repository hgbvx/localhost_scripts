<?php
$json = '{"device": 10,
		  "analog_input":[10,20],
		  "other_info":"description"}';

var_dump(json_decode($json));

?>