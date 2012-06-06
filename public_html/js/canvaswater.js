/*
* canvaswater.js 0.5 javascript library
*
* Copyright (c) 2012 Yuuki miyoshi
* Licensed under the MIT License:
* http://www.opensource.org/licenses/mit-license.php
*
* @author Yuuki miyoshi
* @version 0.5
* @url http://github.com/yuukimiyo/CanvasWater
* @github http://github.com/yuukimiyo/CanvasWater
*
*/ 

window.onload=function(){
	fitCanvas();
	draw();
	
	$(window).resize(function() {
		fitCanvas();
		draw();
	}); 
}

function fitCanvas() {
	if (!document.getElementById('canvaswater')) { return false; }
	if (!document.getElementById('wrapper')) { return false; }
	
	$("#canvaswater").attr({height:$("#wrapper").height()});
	$("#canvaswater").attr({width:$("#wrapper").width()});
}

function draw() {
	if (!document.getElementById('canvaswater')) { return false; }
	var canvas = document.getElementById('canvaswater');
	if (!canvas.getContext) { return false; }
  
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'rgb(0, 80, 77)';
	ctx.fillRect(0, 0, $("#wrapper").width(), $("#wrapper").height());
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(200, 20);
	ctx.lineTo(200, 200);
	ctx.lineTo(20, 200);
	ctx.closePath();
	ctx.fillStyle = 'rgb(192, 80, 77)';
	ctx.fill();
	
	ctx.stroke();
}