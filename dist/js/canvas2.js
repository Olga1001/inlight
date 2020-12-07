"use strict";

var stage2 = document.querySelector('.stage2'),
    cb2 = stage2.getBoundingClientRect(),
    ctx2 = stage2.getContext('2d'),
    ratio2 = window.devicePixelRatio || 1,
    mouse2 = {
  x2: 0,
  y2: 0
},
    dots2 = [],
    wide2 = 6,
    high2 = 5,
    size2 = 9,
    padding2 = 50,
    elemOff2 = document.querySelector(".canvas-dots-gray").getBoundingClientRect(),
    elemOffTop2 = elemOff2.top,
    elemOffLeft2 = elemOff2.left,
    elemWidth2 = document.querySelector(".canvas-dots-gray").offsetWidth * ratio2; // console.log(elemWidth);

window.onmousemove = function (e) {
  mouse2.y = (e.pageY - elemOffTop2) * ratio2;

  if (e.pageX >= elemWidth2 + elemOffLeft2) {
    mouse2.x = elemWidth2;
  } else {
    mouse2.x = (e.pageX - elemOffLeft2) * ratio2;
  } // console.log("e.pageX = " + e.pageX);
  // console.log("e.pageY = " + e.pageY);

};

window.onresize = function () {
  ctx2.canvas.width = document.querySelector(".canvas-dots-gray").offsetWidth * ratio2;
  ctx2.canvas.height = document.querySelector(".canvas-dots-gray").offsetHeight * ratio2;
  cb2 = stage2.getBoundingClientRect();
};

window.onresize();

function create2() {
  var d = 9;

  for (var i = -1; ++i < wide2;) {
    var x = Math.floor((cb2.width - padding2 * 2) / (wide2 - 1) * i + padding2) * ratio2;

    for (var j = -1; ++j < high2;) {
      var y = Math.floor((cb2.height - padding2 * 2) / (high2 - 1) * j + padding2) * ratio2;
      dots2.push({
        x: x,
        y: y,
        ox: x,
        oy: y
      });
    }
  }
}

create2();

function render2() {
  // clear the canvas
  ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height); // choose the dot color
  // ctx2.fillStyle = 'rgba(136,145,163,1)';

  ctx2.fillStyle = 'rgba(136,145,163, 0.2)'; // for each dot

  for (var i = 0; i < dots2.length; i++) {
    var s = dots2[i];
    var v = getV2(s);
    ctx2.circle(s.x + v.x, s.y + v.y, s.size * ratio2, true);
    ctx2.fill();
  }
}

function getV2(dot) {
  // find the distance from the line to the mouse
  var d = getDistance2(dot, mouse2); // reverse the distance, so that the number is bigger when the mouse is closer.

  dot.size = 4;
  dot.size = dot.size < 1 ? 1 : dot.size;
  dot.angle = getAngle2(dot, mouse2);
  return {
    x: (d > 20 ? 20 : d) * Math.cos(dot.angle * Math.PI / 180),
    y: (d > 20 ? 20 : d) * Math.sin(dot.angle * Math.PI / 180)
  };
}

function getAngle2(obj1, obj2) {
  var dX = obj2.x - obj1.x;
  var dY = obj2.y - obj1.y;
  var angleDeg = Math.atan2(dY, dX) / Math.PI * 180;
  return angleDeg;
}

function getDistance2(obj1, obj2) {
  var dx = obj1.x - obj2.x;
  var dy = obj1.y - obj2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

CanvasRenderingContext2D.prototype.circle = function (x, y, r) {
  this.beginPath();
  this.arc(x, y, r, 0, 2 * Math.PI, false);
  this.closePath();
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

(function animloop2() {
  render2();
  requestAnimationFrame(animloop2);
})();