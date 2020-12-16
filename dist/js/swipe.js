"use strict";

$(document).ready(function () {
  // swipe
  // $(".section").swipe({
  //     swipe:function(event, direction, distance, phase, duration, fingerCount, fingerData) {
  //         let _this = $(this);
  //         if (direction == 'up'){
  //             _this.next().addClass('active');
  //             console.log("down");
  //         } else if (direction == 'down'){
  //             _this.removeClass('active');
  //             console.log("up");
  //         }
  //     },
  //     allowPageScroll: "vertical",
  //     // swipeStatus: null,
  //     // triggerOnTouchLeave: false
  // });
  // $(".section").on('touchmove', function () {
  //     let _this = $(this);
  //     if (this.scrollHeight - this.scrollTop === this.clientHeight) {
  //         _this.next().addClass('active');
  //     }
  // });
  // var lastY;
  // $(".section").on('touchstart', function(e) {
  //     lastY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
  //     console.log(lastY);
  // });
  // $(".section").on('touchmove', function(e) {
  //     var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
  //     let _this = $(this);
  //     //console.log(“CurY: “+currentY+” / LasY: “+lastY);
  //     if (Math.abs(currentY-lastY) < 10) { return; }
  //     if (currentY > lastY) {
  //         if (this.scrollTop === 0) {
  //             console.log('down');
  //             _this.removeClass('active');
  //             $(".section.first").addClass('active');
  //         }
  //     } else {
  //         console.log('up');
  //         if (this.scrollHeight - this.scrollTop === this.clientHeight) {
  //             _this.next().addClass('active');
  //         }
  //     }
  // });
  var ts;
  $(".section").bind('touchstart', function (e) {
    ts = e.originalEvent.touches[0].clientY;
  });
  $(".section").bind('touchmove touchstart', function (e) {
    var _this = $(this);

    var te = e.originalEvent.changedTouches[0].clientY;

    if (ts > te + 5) {
      if (this.scrollHeight - this.scrollTop === this.clientHeight) {
        _this.next().addClass('active');
      }
    } else if (ts < te - 5) {
      if (this.scrollTop === 0) {
        _this.removeClass('active');

        $(".section.first").addClass('active');
      }
    }
  });
  $(".stop-propagation").bind('touchmove touchstart', function (e) {
    e.stopPropagation();
  }); // $(".swipe-read").swipe({
  //   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
  //     let thisItem =  $(this);
  //     let maxscroll = thisItem[0].scrollWidth;
  //     if (direction == 'left'){
  //       thisItem.animate({
  //         scrollLeft: -1 * maxscroll
  //       }, 500);
  //     } else if (direction == 'right'){
  //       thisItem.animate({
  //         scrollLeft: maxscroll
  //       }, 500);
  //     }
  //   },
  // });
}); // import {PageFlip} from 'page-flip';
// document.addEventListener('DOMContentLoaded', function() {
//     const pageFlip = new PageFlip(
//         document.getElementById("demoBookExample"),
//         {
//             width: 550, // base page width
//             height: 733, // base page height
//             size: "stretch",
//             // set threshold values:
//             minWidth: 315,
//             maxWidth: 1000,
//             minHeight: 420,
//             maxHeight: 1350,
//             maxShadowOpacity: 0.5, // Half shadow intensity
//             showCover: true,
//             mobileScrollSupport: false // disable content scrolling on mobile devices
//         }
//     );
//     // load pages
//     pageFlip.loadFromHTML(document.querySelectorAll(".page"));
//     document.querySelector(".page-total").innerText = pageFlip.getPageCount();
//     document.querySelector(
//         ".page-orientation"
//     ).innerText = pageFlip.getOrientation();
//     document.querySelector(".btn-prev").addEventListener("click", () => {
//         pageFlip.flipPrev(); // Turn to the previous page (with animation)
//     });
//     document.querySelector(".btn-next").addEventListener("click", () => {
//         pageFlip.flipNext(); // Turn to the next page (with animation)
//     });
//     // triggered by page turning
//     pageFlip.on("flip", (e) => {
//         document.querySelector(".page-current").innerText = e.data + 1;
//     });
//     // triggered when the state of the book changes
//     pageFlip.on("changeState", (e) => {
//         document.querySelector(".page-state").innerText = e.data;
//     });
//     // triggered when page orientation changes
//     pageFlip.on("changeOrientation", (e) => {
//         document.querySelector(".page-orientation").innerText = e.data;
//     });
// });