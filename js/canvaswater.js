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

var BACKGROUND_COLOR = 'rgb(0, 77, 80)';
var RING_COLOR = 'rgb(255, 255, 255)';

var cm;
var am;

/**
 * constractor 
 */
function canvaswater() {
	cm = new CanvasManager();
	am = new AnimationManager();
}

/**
 * program loader. 
 */
onload = function(){
	if (!document.getElementById('canvaswater')) { return false; }
	if (!document.getElementById('wrapper')) { return false; }
	
	var canvas = document.getElementById('canvaswater');
	if (!canvas.getContext) { return false; }
	
	cm.setContext(canvas.getContext('2d'));
	cm.setOffsetLeft($("#canvaswater").offset()["left"]);
	cm.setOffsetTop($("#canvaswater").offset()["top"]);
	cm.setWidth($("#wrapper").width());
	cm.setHeight($("#wrapper").height());

	cm.drawBackground();
	
	$(window).resize(function() {
		cm.setWidth($("#wrapper").width());
		cm.setHeight($("#wrapper").height());
		cm.drawBackground();
	});
	
	$("#canvaswater").mousedown(function(e){
		cm.setMouseX(Math.floor(e.pageX - cm.getOffsetLeft()));
		cm.setMouseY(Math.floor(e.pageY - cm.getOffsetTop()));

		am.setCanvasManager(cm);
		am.start();
    });
}

function AnimationManager() {
	var _cm;
	var _r;
	
	this.setCanvasManager = function(c) {
		_cm = c;
	}
	
	this.start = function() {
		_r = 10;
		this.motionLoop(_r);
	}
	
	this.motionLoop = function(_r) {
		_cm.clearCanvas();
		_cm.drawBackground();
		_cm.drawPointCircle(_cm.getMouseX(), _cm.getMouseY(), _r);

		if (_r < 1000) {
			_r = _r + 10;
			setTimeout(function(){am.motionLoop(_r);},50);
		} else {
			// alert("over");
		}
    	
	}
}

function CanvasManager(){
	var ctx;
	var mouseX = 0;
	var mouseY = 0;
	
	var offsetLeft = 0;
	var offsetTop = 0;
	var canvasWidth = 0;
	var canvasHeight = 0;
	
	var startRadius = 40;
	var radius = startRadius;
	
	/**
	 * context 's setter & getter
	 */
	this.setContext = function(c) {
		ctx = c;
	}
	
	/**
	 * offsetLeft 's setter & getter
	 */
	this.setOffsetLeft = function(l) {
		offsetLeft = l;
	}
	this.getOffsetLeft = function() {
		return offsetLeft;
	}
	
	/**
	 * offsetTop 's setter & getter
	 */
	this.setOffsetTop = function(t) {
		offsetTop = t;
	}
	this.getOffsetTop = function() {
		return offsetTop;
	}
	
	/**
	 * mouseX 's setter & getter
	 */
	this.setMouseX = function(x) {
		mouseX = x;
	}
	this.getMouseX = function() {
		return mouseX;
	}
	
	/**
	 * mouseY 's setter & getter
	 */
	this.setMouseY = function(y) {
		mouseY = y;
	}
	this.getMouseY = function() {
		return mouseY;
	}
	
	/**
	 * width 's setter
	 */
	this.setWidth = function(w) {
		canvasWidth = w;
		$("#canvaswater").attr({width:canvasWidth});
	}
	
	/**
	 * height 's setter 
	 */
	this.setHeight = function(h) {
		canvasHeight = h;
		$("#canvaswater").attr({height:canvasHeight});
	}
	
	/**
	 * fill background 
	 */
	this.drawBackground = function() {
		ctx.fillStyle = BACKGROUND_COLOR;
		ctx.fillRect(offsetLeft, offsetTop, canvasWidth, canvasHeight);
		ctx.fill();
	}
	
	this.drawPointCircle = function(x,y,r) {
		var polygon = 200;
		
		ctx.beginPath();
		ctx.moveTo(x + r, y);
		for (i = 0; i <= polygon; i++) {
			t=3.14*2*i/polygon;
			ctx.lineTo(Math.cos(t)*r+x, Math.sin(t)*r+y);
		}
		ctx.strokeStyle = RING_COLOR;
		ctx.stroke();
	}
	
	this.clearCanvas = function() {
		ctx.clearRect(offsetLeft, offsetTop, canvasWidth, canvasHeight);
		this.drawBackground();
	}
}

canvaswater();