var grid_size = 30;
var x_axis_distance_grid_lines = 0;
var y_axis_distance_grid_lines = 0;
var x_axis_starting_point = { number: 30, suffix: "" };
var y_axis_starting_point = { number: 30, suffix: "" };

var canvasBG = document.getElementById("my-canvas");
var ctx1 = canvasBG.getContext("2d");

var canvas_width = canvasBG.width;
var canvas_height = canvasBG.height;

var num_lines_x = Math.floor(canvas_height / grid_size);
var num_lines_y = Math.floor(canvas_width / grid_size);

// Draw grid lines along X-axis
for (var i = 0; i <= num_lines_x; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;

  // If line represents X-axis draw in different color
  if (i == x_axis_distance_grid_lines) ctx1.strokeStyle = "#000000";
  else ctx1.strokeStyle = "#e9e9e9";

  if (i == num_lines_x) {
    ctx1.moveTo(0, grid_size * i);
    ctx1.lineTo(canvas_width, grid_size * i);
  } else {
    ctx1.moveTo(0, grid_size * i + 0.5);
    ctx1.lineTo(canvas_width, grid_size * i + 0.5);
  }
  ctx1.stroke();
}

// Draw grid lines along Y-axis
for (i = 0; i <= num_lines_y; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;

  // If line represents X-axis draw in different color
  if (i == y_axis_distance_grid_lines) ctx1.strokeStyle = "#000000";
  else ctx1.strokeStyle = "#e9e9e9";

  if (i == num_lines_y) {
    ctx1.moveTo(grid_size * i, 0);
    ctx1.lineTo(grid_size * i, canvas_height);
  } else {
    ctx1.moveTo(grid_size * i + 0.5, 0);
    ctx1.lineTo(grid_size * i + 0.5, canvas_height);
  }
  ctx1.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx1.translate(
  y_axis_distance_grid_lines * grid_size,
  x_axis_distance_grid_lines * grid_size
);

// Ticks marks along the positive X-axis
for (i = 1; i < num_lines_y - y_axis_distance_grid_lines; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;
  ctx1.strokeStyle = "#000000";

  // Draw a tick mark 6px long (-3 to 3)
  ctx1.moveTo(grid_size * i + 0.5, -3);
  ctx1.lineTo(grid_size * i + 0.5, 3);
  ctx1.stroke();

  // Text value at that point
  ctx1.font = "9px Arial";
  ctx1.textAlign = "start";
  ctx1.fillText(
    x_axis_starting_point.number * i + x_axis_starting_point.suffix,
    grid_size * i - 2,
    15
  );
}

// Ticks marks along the negative X-axis
for (i = 1; i < y_axis_distance_grid_lines; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;
  ctx1.strokeStyle = "#000000";

  // Draw a tick mark 6px long (-3 to 3)
  ctx1.moveTo(-grid_size * i + 0.5, -3);
  ctx1.lineTo(-grid_size * i + 0.5, 3);
  ctx1.stroke();

  // Text value at that point
  ctx1.font = "9px Arial";
  ctx1.textAlign = "end";
  ctx1.fillText(
    -x_axis_starting_point.number * i + x_axis_starting_point.suffix,
    -grid_size * i + 3,
    15
  );
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for (i = 1; i < num_lines_x - x_axis_distance_grid_lines; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;
  ctx1.strokeStyle = "#000000";

  // Draw a tick mark 6px long (-3 to 3)
  ctx1.moveTo(-3, grid_size * i + 0.5);
  ctx1.lineTo(3, grid_size * i + 0.5);
  ctx1.stroke();

  // Text value at that point
  ctx1.font = "9px Arial";
  ctx1.textAlign = "start";
  ctx1.fillText(
    y_axis_starting_point.number * i + y_axis_starting_point.suffix,
    8,
    grid_size * i + 3
  );
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for (i = 1; i < x_axis_distance_grid_lines; i++) {
  ctx1.beginPath();
  ctx1.lineWidth = 1;
  ctx1.strokeStyle = "#000000";

  // Draw a tick mark 6px long (-3 to 3)
  ctx1.moveTo(-3, -grid_size * i + 0.5);
  ctx1.lineTo(3, -grid_size * i + 0.5);
  ctx1.stroke();

  // Text value at that point
  ctx1.font = "9px Arial";
  ctx1.textAlign = "start";
  ctx1.fillText(
    y_axis_starting_point.number * i + y_axis_starting_point.suffix,
    8,
    -grid_size * i + 3
  );
}
