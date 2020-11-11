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

  }); // var stop = false;
  //     // do your logic here
  // if(stop){
  //     document.querySelector('.sixth').onwheel = e => e.stopPropagation();
  // }   
  // var div = $('.sixth .iScrollVerticalScrollbar'),
  //     div_sh = $(div)[0].scrollHeight,
  //     div_h = div.height();
  // $(div).scroll(function(){
  //     if ($(this).scrollTop() >= div_sh - div_h) {
  //        console.log('прокрутил до конца');
  //     }
  //     else {
  //         console.log('не прокрутил до конца');
  //     }
  // }); 

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    roundLengths: true,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 40,
      depth: 200,
      modifier: 1 //   slideShadows: true,

    }
  });
});