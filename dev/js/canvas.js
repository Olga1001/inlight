
var stage        = document.querySelector('.stage'),
    cb           = stage.getBoundingClientRect(),
    ctx          = stage.getContext('2d'),
    ratio        = window.devicePixelRatio || 1,
    mouse        = {x: 0, y: 0},
    dots         = [],
    wide         = 6,
    high         = 5,
    size         = 9,
    padding      = 50,
    elemOff      = document.querySelector(".canvas-dots").getBoundingClientRect(),
    elemOffTop   = elemOff.top,
    elemOffLeft  = elemOff.left,
    elemWidth    = document.querySelector(".canvas-dots").offsetWidth * ratio;

    // console.log(elemWidth);

    window.onmousemove = function(e){
        mouse.y = (e.pageY - elemOffTop) * ratio;

        if(e.pageX >= (elemWidth + elemOffLeft)) {
            mouse.x = elemWidth;
        }else{
            mouse.x = (e.pageX - elemOffLeft) * ratio;
        }
        // console.log("e.pageX = " + e.pageX);
        // console.log("e.pageY = " + e.pageY);
    }
    
    
    window.onresize = function(){
        ctx.canvas.width  = document.querySelector(".canvas-dots").offsetWidth * ratio;
        ctx.canvas.height = document.querySelector(".canvas-dots").offsetHeight * ratio;
        cb = stage.getBoundingClientRect();
    }
    
    window.onresize();
    
    function create(){
        var d = 9;
        for(var i=-1; ++i<wide;){
            var x = Math.floor((((cb.width-padding*2) / (wide-1)) * i) + padding) * ratio;
    
            for(var j=-1; ++j<high;){
    
                var y = Math.floor((((cb.height-padding*2) / (high-1)) * j) + padding) * ratio;
    
                dots.push({
                    x: x,
                    y: y,
                    ox: x,
                    oy: y
                });
            }
        }
    }
    
    create();
    
    function render(){
        // clear the canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
        // choose the dot color
        ctx.fillStyle = 'rgba(249,249,249, 0.2)';
        // stage2.fillStyle = 'rgba(136,145,163, 0.2)';
    
    
        // for each dot
        for(var i=0;i<dots.length;i++){
            var s = dots[i];
    
            var v = getV(s)
    
            ctx.circle(s.x + v.x, s.y + v.y, s.size * ratio, true);
            ctx.fill();
        }
    
        
    }
    
    function getV(dot) {
        // find the distance from the line to the mouse
        var d = getDistance(dot, mouse);
    
        // reverse the distance, so that the number is bigger when the mouse is closer.
        dot.size = 4;
        dot.size = dot.size < 1 ? 1 : dot.size;
    
        dot.angle = getAngle(dot, mouse);
    
        return {
            x: (d > 20 ? 20 : d) * Math.cos(dot.angle * Math.PI / 180),
            y: (d > 20 ? 20 : d) * Math.sin(dot.angle * Math.PI / 180)
        }
    }
    
    function getAngle(obj1, obj2){
        var dX = obj2.x - obj1.x;
        var dY = obj2.y - obj1.y;
        var angleDeg = Math.atan2(dY,dX)/Math.PI*180;
        return angleDeg;
    }
    
    function getDistance(obj1, obj2){
        var dx = obj1.x-obj2.x;
        var dy = obj1.y-obj2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    
    CanvasRenderingContext2D.prototype.circle = function (x, y, r) {
        this.beginPath();
        this.arc(x, y, r, 0, 2 * Math.PI, false);
        this.closePath();
    }
    
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    
    (function animloop(){
        
        render();
    
        requestAnimationFrame(animloop);
        
    })();