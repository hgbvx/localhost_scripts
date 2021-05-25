		function convert(val, unitIn, unitOut) {
			var convertionUnit = { "rpm" : 1.0, "rps" : 60.0, "rad/s" : 9.5492965855137, "rad/m" : 572.957795130822, "deg/s" : 0.16666667125087017, "deg/m" : 9.999999998122608 };

			return val * convertionUnit[unitIn]/ convertionUnit[unitOut]; 
		}	
		function myOnClickMethod() {
			var text = document.getElementById("json").value;
			var jsonFlag = isJson(text);
			
			
			if(jsonFlag == true) {
				var obj = JSON.parse(text.toString());
				var speed_value = obj.pred_obr;
				var unit_in = obj.unit_in;
				var unit_out = obj.unit_out;
		
				var conv_speed = convert(speed_value, unit_in, unit_out);
				var conv_json = {conv_speed: conv_speed,unit_out: unit_out}
				
				document.getElementById("value_out").innerHTML = JSON.stringify(conv_json);
			}
			else {
				document.getElementById("value_out").innerHTML = "Bad format";
			}

		
			
		}

		function isJson(str) {
			try {
				JSON.parse(str);

			} catch (e) {
				return false;
			}
			return true;
		}