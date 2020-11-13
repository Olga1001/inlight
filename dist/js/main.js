"use strict";

$(document).ready(function () {
  $('.fullpage').fullpage({
    licenseKey: 'YOUR_KEY_HERE',
    navigation: false,
    scrollOverflow: true,
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: true,
    controlArrows: false,
    scrollBar: false // normalScrollElements: '#first',

  });
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true
  });
  $(".slider-client").slick({
    variableWidth: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px'
  });
});