<?php
$myfile = fopen("json_led.txt","w") or die ("Unable to open file!");
fwrite($myfile, "");
fclose($myfile);
?>