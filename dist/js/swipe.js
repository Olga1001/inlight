"use strict";

$(document).ready(function () {
  // swipe
  $(".section").swipe({
    swipe: function swipe(event, direction, distance, phase, duration, fingerCount, fingerData) {
      var _this = $(this);

      if (direction == 'up') {
        _this.next().addClass('active');

        console.log("down");
      } else if (direction == 'down') {
        _this.removeClass('active');

        console.log("up");
      }
    },
    allowPageScroll: "vertical" // swipeStatus: null,
    // triggerOnTouchLeave: false

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
});