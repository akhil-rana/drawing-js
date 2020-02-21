const canvas = document.getElementById("shape");
const ctx = canvas.getContext("2d");

let rectWidth, rectHeight;
$(document).ready(function() {
  $("#drawRect").click(function() {
    rectWidth = $("#RectWidth").val();
    rectHeight = $("#RectHeight").val();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "green";
    ctx.strokeRect(2, 2, rectWidth, rectHeight);
  });
});
