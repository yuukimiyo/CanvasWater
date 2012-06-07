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

var cm;

/**
 * constractor 
 */
function canvaswater() {
	cm = new CanvasManager(); 
}

/**
 * program loader. 
 */
window.onload=function(){
	if (!document.getElementById('canvaswater')) { return false; }
	if (!document.getElementById('wrapper')) { return false; }
	
	var canvas = document.getElementById('canvaswater');
	if (!canvas.getContext) { return false; }
	
	cm.ctx = canvas.getContext('2d');
	cm.offsetLeft = $("#canvaswater").offset()["left"];
	cm.offsetTop = $("#canvaswater").offset()["top"];
	
	cm.resizeCanvas($("#wrapper").width(),$("#wrapper").height());
	cm.drawBackground();
	
	$(window).resize(function() {
		cm.resizeCanvas($("#wrapper").width(),$("#wrapper").height());
		cm.drawBackground();
	});
	
	$("#canvaswater").mousedown(function(e){
		cm.clickHandra(e);
    });
    
    $("#canvaswater").mouseup(function(e){
		cm.deleteCircle(e);
    });
}

function CanvasManager(){
	var obj = this;
	
	obj.ctx;
	obj.mouseX = 0;
	obj.mouseY = 0;
	
	obj.offsetLeft = 0;
	obj.offsetTop = 0;
	obj.canvasWidth = 0;
	obj.canvasHeight = 0;
	
	obj.bgColor = 'rgb(0, 80, 77)';
	obj.rectColor = 'rgb(192, 80, 77)';
	
	obj.startRadius = 40;
	obj.radius = obj.startRadius;
	
	obj.drawBackground = function() {
		obj.ctx.fillStyle = obj.bgColor;
		obj.ctx.fillRect(obj.offsetLeft, obj.offsetTop, obj.canvasWidth, obj.canvasHeight);
		obj.ctx.fill();
	}
	
	obj.clickHandra = function(e) {
		obj.mouseX = Math.floor(e.pageX - obj.offsetLeft);
		obj.mouseY = Math.floor(e.pageY - obj.offsetTop);
		obj.drawCircle();
	}
	
	obj.drawCircle = function() {
		obj.ctx.beginPath();
		obj.ctx.arc(obj.mouseX, obj.mouseY, obj.radius, 0, Math.PI*2, false);
		obj.ctx.stroke();
	}
	
	obj.deleteCircle = function() {
		obj.ctx.beginPath();
		obj.ctx.clearRect(obj.offsetLeft, obj.offsetTop, obj.canvasWidth, obj.canvasHeight);
		obj.drawBackground();
	}
	
	obj.resizeCanvas = function(w,h) {
		obj.canvasWidth = w;
		obj.canvasHeight = h;
		
		$("#canvaswater").attr({width:obj.canvasWidth});
		$("#canvaswater").attr({height:obj.canvasHeight});
	}
}

canvaswater();