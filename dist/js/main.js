"use strict";

$(document).ready(function () {
  // $('#fullpage').pagepiling({
  //   direction: 'vertical',
  //   verticalCentered: true,
  //   scrollable: true,
  //   navigation: false,
  //   easing: 'linear',
  //   scrollBar: true,
  //   onLeave: function(){
  //     new WOW().init();
  //   },
  //   // afterRender: function(){
  //   //   new WOW().init();
  //   // },
  //   //  afterLoad: function(anchorLink, index){
  //   //   new WOW().init();
  //   // },
  // });
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    vertical: false
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
    centerPadding: '0px'
  }); // initialization animation - wow

  new WOW().init();

  function checkReading() {
    if (checkReading.read) {
      return;
    }

    checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
    document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
    checkReading.noticeBox.innerHTML = checkReading.read ? "Thank you." : "Please, scroll and read the following text.";
  } // $(".section").scroll(function() {
  //     let _this_sh = $(_this)[0].scrollHeight;
  //     let _this_h = _this.height();
  // if (_this.scrollTop() >= _this_sh - _this_h) {
  //   console.log('прокрутил до конца');


  $(".section").on("mousewheel", function (event) {
    var _this = $(this);

    _this.onscroll = checkReading;

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      _this.removeClass('active');

      console.log("up");
    } else {
      _this.next().addClass('active');

      console.log("down");
    }
  }); // }
  // else {
  //   console.log('не прокрутил до конца');
  // }
  // if(!_this.hasClass('sixth')) {
  //   if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
  //     _this.removeClass('active');
  //     console.log("up");
  //   } else {
  //     _this.next().addClass('active');
  //     console.log("down");
  //   }
  //     return false;
  // }
  // });
});