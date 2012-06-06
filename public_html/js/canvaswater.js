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
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(120, 20);
	ctx.lineTo(120, 120);
	ctx.lineTo(20, 120);
	ctx.closePath();
	ctx.stroke();
}