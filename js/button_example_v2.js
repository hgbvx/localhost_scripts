var buttonCounter = 0;

function myOnClickeMethod() {
    buttonCounter += 1;
    var paragraphDispText = "<b>Hello world! </b>"; //+ buttonCounter.toString();
    document.getElementById("paragraph").innerHTML = paragraphDispText;
}