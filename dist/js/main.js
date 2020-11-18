"use strict";

$(document).ready(function () {
  new WOW().init();
  $('#fullpage').pagepiling({
    direction: 'vertical',
    verticalCentered: true,
    scrollable: true,
    navigation: false,
    easing: 'linear',
    scrollBar: true,
    onLeave: function onLeave() {
      new WOW().init();
    } // afterRender: function(){
    //   new WOW().init();
    // },
    //  afterLoad: function(anchorLink, index){
    //   new WOW().init();
    // },

  });
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
});