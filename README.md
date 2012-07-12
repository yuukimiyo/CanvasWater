CanvasWater
===
Sample of javaScript and html5 canvas.

About
---
HTML5のキャンバスに波紋のような円を描くサンプルです。
画面をクリックすると、クリックした場所を中心に円が拡大します。

Usage
---
次のようなHTMLファイルで動作します。

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CanvasWater</title>
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
<!--[if IE]>
<script type="text/javascript" src="js/excanvas.js"></script>
<![endif]-->
<script type="text/javascript" src="js/canvaswater.js"></script>
</head>
<body>
<div id="wrapper">
<canvas id="canvaswater"></canvas>
</div>
</body>
</html>
```

Dependency
---
このソフトウェアは以下のコードを利用しています。
* jQuery-1.7.2
* excanvas.js (by Google Inc.)
* reset.css (by Yahoo! Inc.)

Change log
---
* 2012-06-21 目標達成
* 2012-06-05 作成開始