const canvas = document.getElementById("shape");
const ctx = canvas.getContext("2d");

$("#drawFig").click(function() {
  let selectedValue = $(".shapeSelect").val();
  if (selectedValue == 2) {
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
  } else if (selectedValue == 1) {
    let side = $("#side").val();
    let xoffs = $("#xoffs").val();
    let yoffs = $("#yoffs").val();
    let colors = "#" + $("#colorSquare").val();

    if ($(".clearCanvas").is(":checked")) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if ($(".colorFill").is(":checked")) {
      ctx.fillStyle = colors;
      ctx.fillRect(xoffs, yoffs, side, side);
    } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(xoffs, yoffs, side, side);
    }
  }
});

$(".shapeSelect").change(function() {
  let selectedValue = $(this).val();
  if (selectedValue == 1) {
    $(".RectInput").css("display", "none");
    $(".SquareInput").css("display", "block");
  } else if (selectedValue == 2) {
    $(".SquareInput").css("display", "none");
    $(".RectInput").css("display", "block");
  }
});
