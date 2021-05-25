function showGetResult()
{
     var result = null;
     var scriptUrl = "get_config.php";
     $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data;
        } 
     });
     return result;
}

var json_result = showGetResult();


const sampleTimeSec = json_result.sampling;                  ///< sample time in sec
const sampleTimeMsec = 1000 * sampleTimeSec;  ///< sample time in msec
const maxSamplesNumber = json_result.samples;               ///< maximum number of samples

var xdata; ///< x-axis labels array: time stamps
var ydata; ///< y-axis data array: random value
var ydata1;
var ydata2;
var lastTimeStamp; ///< most recent time stamp 

var chartContext;  ///< chart context i.e. object that "owns" chart
var chart;         ///< Chart.js object

var timer; ///< request timer

const url = 'http://192.168.0.106/data.py'; ///< server app with JSON API
//const url = 'http://' + window.location.hostname + '/nocache/chartdata.json'

/**
* @brief Generate random value.
* @retval random number from range <-1, 1>
*/
function getRand() {
	const maxVal = 1.0;
	const minVal = -1.0;
	return (maxVal - minVal) * Math.random() + minVal;
}

/**
* @brief Add new value to next data point.
* @param y New y-axis value 
*/
function addData(y, y1, y2) {
	if (ydata.length > maxSamplesNumber) {
		removeOldData();
		lastTimeStamp += sampleTimeSec;
		xdata.push(lastTimeStamp.toFixed(4));
	}


	ydata.push(y);
	ydata1.push(y1);
	ydata2.push(y2);

	chart.update();
}

/**
* @brief Remove oldest data point.
*/
function removeOldData() {
	xdata.splice(0, 1);
	ydata.splice(0, 1);
	ydata1.splice(0, 1);
	ydata2.splice(0, 1);
}

/**
* @brief Start request timer
*/
function startTimer() {
	timer = setInterval(ajaxJSON, sampleTimeMsec);
}

/**
* @brief Stop request timer
*/
function stopTimer() {
	clearInterval(timer);
}

/**
* @brief Send HTTP GET request to IoT server
*/
function ajaxJSON() {
	$.ajax(url, {
		type: 'GET', dataType: 'json',
		success: function (responseJSON, status, xhr) {
			addData(responseJSON.roll, responseJSON.pitch, responseJSON.yaw);

		}
	});
}

/**
* @brief Chart initialization
*/
function chartInit() {
	// array with consecutive integers: <0, maxSamplesNumber-1>
	xdata = [...Array(maxSamplesNumber).keys()];
	// scaling all values ​​times the sample time 
	xdata.forEach(function (p, i) { this[i] = (this[i] * sampleTimeSec).toFixed(4); }, xdata);

	// last value of 'xdata'
	lastTimeStamp = +xdata[xdata.length - 1];

	// empty array
	ydata = [];
	ydata1 = [];
	ydata2 = [];

	// get chart context from 'canvas' element
	chartContext = $("#chart")[0].getContext('2d');

	chart = new Chart(chartContext, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xdata,
			datasets: [{
				fill: false,
				label: 'roll',
				backgroundColor: 'rgb(255, 0, 0)',
				borderColor: 'rgb(255, 0, 0)',
				data: ydata,
				lineTension: 0
			},
			{
				fill: false,
				label: 'pitch',
				backgroundColor: 'rgb(0, 0, 255)',
				borderColor: 'rgb(0, 0, 255)',
				data: ydata1,
				lineTension: 0
			},
			{
				fill: false,
				label: 'yaw',
				backgroundColor: 'rgb(0, 255, 0)',
				borderColor: 'rgb(0, 255, 0)',
				data: ydata2,
				lineTension: 0
			}]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Degrees'
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
	});

	ydata = chart.data.datasets[0].data;
	ydata1 = chart.data.datasets[1].data;
	ydata2 = chart.data.datasets[2].data;

	xdata = chart.data.labels;

	//$.ajaxSetup({ cache: false });
}

$(document).ready(() => {
	chartInit();
	$("#start").click(startTimer);
	$("#stop").click(stopTimer);
	$("#sampletime").text(sampleTimeMsec.toString());
	$("#samplenumber").text(maxSamplesNumber.toString());
});