"use strict";

$(document).ready(function () {
  var option = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    vertical: false
  };

  if (window.matchMedia("(min-width: 569px) and (min-height: 415px)").matches) {
    $(".slider").slick(option, {
      responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true
        }
      }, {
        breakpoint: 569,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true
        }
      }]
    });
  } else {
    $(".slider").slick(option, {
      responsive: [{
        breakpoint: 562,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }

  $(".slider-client").slick({
    variableWidth: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 569,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    }]
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".slider-stages").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      focusOnSelect: true,
      centerPadding: '0px'
    });
  } // scroll on mousewhele


  $(".section").on("mousewheel", function (e) {
    var _this = $(this),
        delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

    if (delta >= 0) {
      if (this.scrollTop === 0) {
        _this.removeClass('active');

        console.log("up");
      }
    } else {
      if (this.scrollHeight - this.scrollTop === this.clientHeight) {
        _this.next().addClass('active');

        console.log("down");
      }
    }
  }); // scroll on swipe
  //  $(".fullpage").scroll(function() {
  //   var scroll = $(".section").scrollTop() + $(".section").height();
  //   //Если скролл до конца елемента
  //   //var offset = $element.offset().top + $element.height();
  //   //Если скролл до начала елемента
  //   var offset = $element.offset().top
  //   if (scroll > offset && counter == 0) {
  //     console.log("ss");
  //     counter = 1;
  //   }
  // });

  $(".section").swipe({
    swipe: function swipe(event, direction, distance, phase, duration, fingerCount, fingerData) {
      var _this = $(this); // let delta = parseInt(event.originalEvent.touches);
      // console.log(delta);


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
  // burger 

  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navtop").toggleClass('active');
  });
});

function funonload() {
  $(".first").addClass('active');
}

window.onload = funonload;