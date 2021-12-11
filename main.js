var mouseEvent = "empty";
var last_position_x, last_position_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "lightblue";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
	color = document.getElementById("color").value;
	width_of_line = document.getElementById("width_of_line").value;
	mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
	current_x = e.clientX - canvas.offsetLeft;
	current_y = e.clientY - canvas.offsetTop;
	if (mouseEvent == "mouseDown") {
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = width_of_line;
		ctx.moveTo(last_position_x, last_position_y);
		ctx.lineTo(current_x, current_y);
		ctx.stroke();
	}
	last_position_x = current_x;
	last_position_y = current_y;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
	mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
	mouseEvent = "mouseleave";
}

function clearr() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
