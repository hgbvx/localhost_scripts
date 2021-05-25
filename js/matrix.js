
function changeColor() {

    var r = $("#myRange").val();
    var g = $("#myRange1").val();
    var b = $("#myRange2").val();
    $(this).css('background-color', `rgb(${r},${g},${b})`);

}

function updateColorButton() {
    var r = $("#myRange").val();
    var g = $("#myRange1").val();
    var b = $("#myRange2").val();



    $("#colorbutton").css('background-color', `rgb(${r},${g},${b})`);

}

function clearColor() {
    for (var i = 0; i < 64; i++) {
        var temp;
        var n_string = i.toString();
        temp = "#".concat(n_string);
        $(temp).css('background-color', 'transparent')
    }
}


function sendData() {
    $.ajax({
        url: 'clear_file.php'
      });
    for (var i = 0; i < 64; i++) {
        var temp;
        var n_string = i.toString();
        temp = "#".concat(n_string);
        var color = $(temp).css('background-color')
        var numbers = color.match(/\d+/g).map(Number);
        var r = numbers[0];
        var g = numbers[1];
        var b = numbers[2];
        if (numbers[3] != 0) {
            var ledJson = {
                index: i,
                red: r,
                green: g,
                blue: b
            };
            $.ajax({
                type: 'POST',
                url: 'led_mock.php',
                data: { json: JSON.stringify(ledJson) },
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                },
                error: function (xhr, status, error) {
                    console.error(xhr);
                }
            });


        }
    }
}

$(document).ready(() => {

    for (var i = 0; i < 64; i++) {
        var temp;
        var n_string = i.toString();
        temp = "#".concat(n_string);
        $(temp).click(changeColor);
    }
    $("#myRange").click(updateColorButton);
    $("#myRange1").click(updateColorButton);
    $("#myRange2").click(updateColorButton);

    $("#clear").click(clearColor);
    $("#send").click(sendData);





});