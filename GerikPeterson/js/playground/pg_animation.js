/****************************
-- File: pg_animation.js
-- Author: Gerik Peterson
*****************************/

function run() {
	drawLine(50,100,200,400);
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawLine(x1,y1,x2,y2) {
	context.beginPath();
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.stroke();
}

function doTranslate() {

	var rectWidth = 150;
	var rectHeight = 75;

	// translate context to center of canvas
	context.translate(canvas.width / 2, canvas.height / 2);

	context.fillStyle = 'blue';
	context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);
}



run();