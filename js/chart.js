const sampleTime = 1; ///< sample time in sec
var xdata; ///< x-axis labels array: time stamps
var ydata; ///< y-axis data array: random value
var lastTimeStamp; ///< most recent time stamp 
var chartContext;  ///< chart context i.e. object that "owns" chart
var chart; ///< Chart.js object
var t = -1;

function harmonicFunction(A,f,phase){
    t += 1;

    return A* Math.sin(2*(22/7.0)*f*t+phase);

}

function addData(){

    var A = parseFloat(document.getElementById("amp").value);
    var N = parseFloat(document.getElementById("samp").value);
    var f = parseFloat(document.getElementById("freq").value);
    var fi = parseFloat(document.getElementById("phs").value);

	chart.destroy();

	xdata = [...Array(N).keys()];
    xdata.forEach(function(p, i) {this[i] = (this[i]*sampleTime).toFixed(4);}, xdata);
    lastTimeStamp = +xdata[xdata.length-1];
    ydata = [...new Array(xdata.length)]; 
	ydata.forEach(function(p, i) { this[i] = harmonicFunction(A ,f,fi); }, ydata);
    
    chartContext = document.getElementById('chart').getContext('2d');

    //TODO deleting object / change data

	chart = new Chart(chartContext, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xdata,
			datasets: [{
				fill: false,
				label: 'Amplitude',
				backgroundColor: 'rgb(0, 0, 255)',
				borderColor: 'rgb(55, 55, 255)',
				data: ydata,
				lineTension: 0
			}]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Amplitude'
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	}
	);
    t = 0;

}


window.onload = function() {

	chartContext = document.getElementById('chart').getContext('2d');

	chart = new Chart(chartContext, {
		// The type of chart: linear plot
		type: 'line',

	

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Amplitude'
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	}
	);
	
};

