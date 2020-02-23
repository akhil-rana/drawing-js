const canvas = document.getElementById("shape");
const ctx = canvas.getContext("2d");
let rStroke = 1;
let cStroke = 1;
let sStroke = 1;
let lStroke = 1;
let cPushArray = new Array();
let cStep = -1;
$("#drawFig").click(function() {
  let selectedValue = $(".shapeSelect").val();
  if (selectedValue == 2) {
    let rectWidth = $("#RectWidth").val();
    let rectHeight = $("#RectHeight").val();
    let xoff = $("#xoff").val();
    let yoff = $("#yoff").val();
    let color = "#" + $("#color").val();

    if ($(".colorFillr").is(":checked")) {
      ctx.fillStyle = color;
      ctx.fillRect(xoff, yoff, rectWidth, rectHeight);
    } else {
      ctx.lineWidth = rStroke;
      ctx.strokeStyle = color;
      ctx.strokeRect(xoff, yoff, rectWidth, rectHeight);
    }
    cPush();
  } else if (selectedValue == 1) {
    let side = $("#side").val();
    let xoffs = $("#xoffs").val();
    let yoffs = $("#yoffs").val();
    let colors = "#" + $("#colorSquare").val();

    if ($(".colorFills").is(":checked")) {
      ctx.fillStyle = colors;
      ctx.fillRect(xoffs, yoffs, side, side);
    } else {
      ctx.lineWidth = sStroke;
      ctx.strokeStyle = color;
      ctx.strokeRect(xoffs, yoffs, side, side);
    }
    cPush();
  } else if (selectedValue == 3) {
    let radius = $("#radius").val();
    let xoffc = $("#xoffc").val();
    let yoffc = $("#yoffc").val();
    let colorc = "#" + $("#colorCircle").val();

    ctx.beginPath();
    ctx.arc(xoffc, yoffc, radius, 0, 2 * Math.PI);

    if ($(".colorFillc").is(":checked")) {
      ctx.fillStyle = colorc;
      ctx.fill();
    } else {
      ctx.lineWidth = cStroke;
      ctx.strokeStyle = colorc;
      ctx.stroke();
    }
    cPush();
  } else if (selectedValue == 5) {
    let line1x = $("#line1x").val();
    let line1y = $("#line1y").val();
    let line2x = $("#line2x").val();
    let line2y = $("#line2y").val();

    let colorl = "#" + $("#colorLine").val();

    ctx.beginPath();
    ctx.moveTo(line1x, line1y);
    ctx.lineTo(line2x, line2y);

    ctx.lineWidth = lStroke;
    ctx.strokeStyle = colorl;
    ctx.stroke();

    cPush();
  }
});

$(".shapeSelect").change(function() {
  let selectedValue = $(this).val();
  if (selectedValue == 1) {
    $(".RectInput").css("display", "none");
    $(".CircleInput").css("display", "none");
    $(".LineInput").css("display", "none");
    $(".SquareInput").css("display", "block");
  } else if (selectedValue == 2) {
    $(".SquareInput").css("display", "none");
    $(".LineInput").css("display", "none");
    $(".CircleInput").css("display", "none");
    $(".RectInput").css("display", "block");
  } else if (selectedValue == 3) {
    $(".SquareInput").css("display", "none");
    $(".RectInput").css("display", "none");
    $(".LineInput").css("display", "none");
    $(".CircleInput").css("display", "block");
  } else if (selectedValue == 4) {
    $(".SquareInput").css("display", "none");
    $(".RectInput").css("display", "none");
    $(".CircleInput").css("display", "none");
    $(".LineInput").css("display", "none");
  } else if (selectedValue == 5) {
    $(".SquareInput").css("display", "none");
    $(".RectInput").css("display", "none");
    $(".CircleInput").css("display", "none");
    $(".LineInput").css("display", "block");
  }
});

$(".colorFillr").change(function() {
  if ($(".colorFillr").is(":checked")) {
    $("#rectStroke").prop("disabled", true);
  } else {
    $("#rectStroke").prop("disabled", false);
  }
});
$(".colorFills").change(function() {
  if ($(".colorFills").is(":checked")) {
    $("#squareStroke").prop("disabled", true);
  } else {
    $("#squareStroke").prop("disabled", false);
  }
});
$(".colorFillc").change(function() {
  if ($(".colorFillc").is(":checked")) {
    $("#circleStroke").prop("disabled", true);
  } else {
    $("#circleStroke").prop("disabled", false);
  }
});

$("#rectStroke").change(function() {
  rStroke = $(this).val();
  $("#rStrokeValue").text(rStroke + " px");
});
$("#circleStroke").change(function() {
  cStroke = $(this).val();
  $("#cStrokeValue").text(cStroke + " px");
});
$("#squareStroke").change(function() {
  sStroke = $(this).val();
  $("#sStrokeValue").text(sStroke + " px");
});
$("#LineStroke").change(function() {
  lStroke = $(this).val();
  $("#lStrokeValue").text(lStroke + " px");
});
$("#clearCanvas").click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cPush();
});

$("#undo").click(function() {
  cUndo();
});
function cPush() {
  cStep++;
  if (cStep < cPushArray.length) {
    cPushArray.length = cStep;
  }
  cPushArray.push(canvas.toDataURL());
  // console.log(cPushArray);
}

function cUndo() {
  if (cStep > 0) {
    cStep--;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var canvasPic = new Image();
    canvasPic.src = cPushArray[cStep];
    setTimeout(() => {
      ctx.drawImage(canvasPic, 0, 0);
    }, 100);
  }
}

$("#downloadCanvas").click(function() {
  let image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  downloadCanvas.setAttribute("href", image);
});

$(document).ready(function() {
  $(".SquareInput").css("display", "none");
  $(".LineInput").css("display", "none");
  $(".CircleInput").css("display", "none");
  $(".RectInput").css("display", "block");
  $(".shapeSelect").val(2);
});
let clicks = 0;
$("#my-canvas").click(function(e) {
  var offset = $(this).offset();
  var relativeX = e.pageX - offset.left;
  var relativeY = e.pageY - offset.top;
  if ($(".shapeSelect").val() == 5) {
    if (clicks == 2) clicks = 0;
    clicks++;
    if (clicks == 1) {
      $("#line1x").val(Math.round(relativeX));
      $("#line1y").val(Math.round(relativeY));
    }
    if (clicks == 2) {
      $("#line2x").val(Math.round(relativeX));
      $("#line2y").val(Math.round(relativeY));
    }
  }
});
// function cRedo() {
//   if (cStep < cPushArray.length - 1) {
//     cStep++;
//     var canvasPic = new Image();
//     canvasPic.src = cPushArray[cStep];
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(canvasPic, 0, 0);
//   }
// }
