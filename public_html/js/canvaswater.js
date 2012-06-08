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
var am;

/**
 * constractor 
 */
function canvaswater() {
	cm = new CanvasManager();
	am = new animationMaster();
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
		am.setCanvasManager(cm);
		am.start();
    });
    
    $("#canvaswater").mouseup(function(e){
		cm.clearCanvas();
    });
}

/**
 * 
 * @param cm CanvasManager 
 */
function animationMaster() {
	var obj = this;
	var cm;
	
	obj.setCanvasManager = function(c) {
		cm = c;
	}
	
	obj.start = function() {
		cm.drawPointCircle(cm.mouseX, cm.mouseY, 50);
	}
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
	
	obj.bgColor = 'rgb(0, 77, 80)';
	obj.rectColor = 'rgb(192, 80, 77)';
	obj.circleColor = 'rgb(255, 255, 255)';
	
	obj.startRadius = 40;
	obj.radius = obj.startRadius;
	
	/**
	 * fill background 
	 */
	obj.drawBackground = function() {
		obj.ctx.fillStyle = obj.bgColor;
		obj.ctx.fillRect(obj.offsetLeft, obj.offsetTop, obj.canvasWidth, obj.canvasHeight);
		obj.ctx.fill();
	}
	
	obj.clickHandra = function(e) {
		obj.mouseX = Math.floor(e.pageX - obj.offsetLeft);
		obj.mouseY = Math.floor(e.pageY - obj.offsetTop);
		// obj.drawCircle();
		// obj.drawPointCircle(obj.mouseX, obj.mouseY, 100);
	}
	
	obj.drawPointCircle = function(x,y,r) {
		obj.polygon = 200;
		
		obj.ctx.beginPath();
		obj.ctx.moveTo(x + r, y);
		for (i = 0; i <= obj.polygon; i++) {
			t=3.14*2*i/obj.polygon;
			obj.ctx.lineTo(Math.cos(t)*r+x, Math.sin(t)*r+y);
		}
		obj.ctx.strokeStyle = obj.circleColor;
		obj.ctx.stroke();
	}
	
	obj.drawRect = function (x,y,r) {
		/*
		obj.ctx.beginPath();
		obj.ctx.moveTo(x, y - r);
		obj.ctx.lineTo(x + r, y);
		obj.ctx.lineTo(x, y + r);
		obj.ctx.lineTo(x - r, y);
		obj.ctx.lineTo(x, y - r);
		obj.ctx.strokeStyle = obj.circleColor;
		obj.ctx.closePath();
		obj.ctx.stroke();
		*/
	}
	
	obj.drawCircle = function() {
		obj.ctx.beginPath();
		obj.ctx.arc(obj.mouseX, obj.mouseY, obj.radius, 0, Math.PI*2, false);
		obj.ctx.stroke();
	}
	
	obj.clearCanvas = function() {
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