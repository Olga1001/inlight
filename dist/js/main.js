"use strict";

$(document).ready(function () {
  $('.fullpage').fullpage({
    licenseKey: 'YOUR_KEY_HERE',
    navigation: false,
    scrollOverflow: true,
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: true,
    scrollBar: false // navigationPosition: 'right',
    // normalScrollElements: ".header, .header-search-flex, .header-search-contanet"

  });
  $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });
});