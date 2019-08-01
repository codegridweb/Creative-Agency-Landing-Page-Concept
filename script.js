// custom cursor

var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
     xmouse = e.clientX || e.pageX;
     ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
     y = void 0,
     dx = void 0,
     dy = void 0,
     tx = 0,
     ty = 0,
     key = -1;

var followMouse = function followMouse() {
     key = requestAnimationFrame(followMouse);

     if(!x || !y) {
          x = xmouse;
          y = ymouse;
     } else {
          dx = (xmouse - x) * 0.095;
          dy = (ymouse - y) * 0.095;
          if(Math.abs(dx) + Math.abs(dy) < 0.1) {
               x = xmouse;
               y = ymouse;
          } else {
               x += dx;
               y += dy;
          }
     }
     ball.style.left = x + 'px';
     ball.style.top = y + 'px';
};


// intro-title animation  
var textWrapper = document.querySelector('.intro-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.intro-title .letter',
     translateY: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1400,
     delay: function(el, i) {
     return 300 + 30 * i;
     }
}).add({
     targets: '.intro-title .letter',
     translateY: [0,-40],
     opacity: [1,0],
     easing: "easeInExpo",
     duration: 1200,
     delay: function(el, i) {
     return 100 + 30 * i;
     }
});


// hero-title animation
var textWrapper = document.querySelector('.hero-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.hero-title .letter',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1200,
     delay: function(el, i) {
     return 8000 + 30 * i;
     }
});

// reveling other elements
TweenMax.to(".loading-screen", 2.2, {
     delay: 3.8,
     top: "-100%",
     ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
     delay: 5.2,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
     delay: 5.3,
     y: 20,
     opacity: 0,
     ease: Expo.easeInOut
});


TweenMax.from(".bar", 2, {
    delay: 7.2,
    width: "0%",
    ease: Expo.easeInOut
});

TweenMax.from(".project", 2, {
     delay: 5.9,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
     delay: 6.2,
     opacity: 0,
     y: 20,
     ease: Power3.easeInOut
}, 0.1);