<html>
  <head>
    <title>PHP FORMULARZ</title>
  </head>
    <body>
		<?php
		//pre_r($_POST);
		if (isset($_POST['submit'])){
			
			
			
			for ($i = 0; $i < 64 ; $i++)
			{
				
				
				if ($_POST[$i])
				{
					$x = ($i%8);
					$y =intdiv( $i, 8);
					
					
					$cmd = 'sudo python3 am_3_zad_3.py -x ' . $x . ' -y ' . $y . ' -c ' . $_POST[$i] ;
					shell_exec($cmd);

				}
				
				//echo $_POST[$i];
			}
			
			//chdir('home/pi/Documents/AM/python');
			
			
		}
		
		?>
	
      <form action = "" method="POST">
		<input type="text" name="0" value="" size="1">
		<input type="text" name="1" value="" size="1">
		<input type="text" name="2" value="" size="1">
		<input type="text" name="3" value="" size="1">
		<input type="text" name="4" value="" size="1">
		<input type="text" name="5" value="" size="1">
		<input type="text" name="6" value="" size="1">
		<input type="text" name="7" value="" size="1">

        <p><input type="text" name="8" value="" size="1">
		<input type="text" name="9" value="" size="1">
		<input type="text" name="10" value="" size="1">
		<input type="text" name="11" value="" size="1">
		<input type="text" name="12" value="" size="1">
		<input type="text" name="13" value="" size="1">
		<input type="text" name="14" value="" size="1">
		<input type="text" name="15" value="" size="1"></p>
		
		 <p><input type="text" name="16" value="" size="1">
		<input type="text" name="17" value="" size="1">
		<input type="text" name="18" value="" size="1">
		<input type="text" name="19" value="" size="1">
		<input type="text" name="20" value="" size="1">
		<input type="text" name="21" value="" size="1">
		<input type="text" name="22" value="" size="1">
		<input type="text" name="23" value="" size="1"></p>
		
		 <p><input type="text" name="24" value="" size="1">
		<input type="text" name="25" value="" size="1">
		<input type="text" name="26" value="" size="1">
		<input type="text" name="27" value="" size="1">
		<input type="text" name="28" value="" size="1">
		<input type="text" name="29" value="" size="1">
		<input type="text" name="30" value="" size="1">
		<input type="text" name="31" value="" size="1"></p>
		
		 <p><input type="text" name="32" value="" size="1">
		<input type="text" name="33" value="" size="1">
		<input type="text" name="34" value="" size="1">
		<input type="text" name="35" value="" size="1">
		<input type="text" name="36" value="" size="1">
		<input type="text" name="37" value="" size="1">
		<input type="text" name="38" value="" size="1">
		<input type="text" name="39" value="" size="1"></p>
		
		 <p><input type="text" name="40" value="" size="1">
		<input type="text" name="41" value="" size="1">
		<input type="text" name="42" value="" size="1">
		<input type="text" name="43" value="" size="1">
		<input type="text" name="44" value="" size="1">
		<input type="text" name="45" value="" size="1">
		<input type="text" name="46" value="" size="1">
		<input type="text" name="47" value="" size="1"></p>
		
		 <p><input type="text" name="48" value="" size="1">
		<input type="text" name="49" value="" size="1">
		<input type="text" name="50" value="" size="1">
		<input type="text" name="51" value="" size="1">
		<input type="text" name="52" value="" size="1">
		<input type="text" name="53" value="" size="1">
		<input type="text" name="54" value="" size="1">
		<input type="text" name="55" value="" size="1"></p>
		
		 <p><input type="text" name="56" value="" size="1">
		<input type="text" name="57" value="" size="1">
		<input type="text" name="58" value="" size="1">
		<input type="text" name="59" value="" size="1">
		<input type="text" name="60" value="" size="1">
		<input type="text" name="61" value="" size="1">
		<input type="text" name="62" value="" size="1">
		<input type="text" name="63" value="" size="1"></p>

		<input type="submit" name="submit" value="Submit">
      
      </form>
    </body>
</html>

<?php

function pre_r( $array ){
	echo '<pre>';
	print_r($array);
	echo '</pre>';

}

?>