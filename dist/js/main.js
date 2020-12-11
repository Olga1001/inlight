"use strict";

$(document).ready(function () {
  //sliders
  var option = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    vertical: false,
    centerPadding: '0px'
  };
  $(".slider").slick(option, {
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false
      }
    }, {
      breakpoint: 569,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      }
    }]
  });
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
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false
      }
    }, {
      breakpoint: 569,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false
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


  $(".section").on("mousewheel DOMMouseScroll", function (e) {
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
  }); // burger menu

  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navtop").toggleClass('active');
  }); // dot for btn - stop animation

  setTimeout(function () {
    $(".dot").css("display", "none");
  }, 3900);
}); // added animation first section at onload 

function funonload() {
  $(".first").addClass('active');
  $(".header").addClass('active');
  $(".showcase").addClass('active');
  $(".showcases").addClass('active');
}

window.onload = funonload;