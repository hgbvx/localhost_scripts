<?php

	function factorial($parametr1)
	{
		$value = 1;
		for($i = 1; $i <= $parametr1; $i++)
		{
			$value *= $i;
		}
		return $value;
	}

?>