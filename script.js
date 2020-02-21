const canvas = document.getElementById("shape");
const ctx = canvas.getContext("2d");

$(document).ready(function() {
  $("#drawRect").click(function() {
    let rectWidth = $("#RectWidth").val();
    let rectHeight = $("#RectHeight").val();
    let xoff = $("#xoff").val();
    let yoff = $("#yoff").val();
    let color = "#" + $("#color").val();

    if ($(".clearCanvas").is(":checked")) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if ($(".colorFill").is(":checked")) {
      ctx.fillStyle = color;
      ctx.fillRect(xoff, yoff, rectWidth, rectHeight);
    } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(xoff, yoff, rectWidth, rectHeight);
    }
  });
});
