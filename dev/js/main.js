$(document).ready(function () {
  let option = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    vertical: false,
  };

  if (window.matchMedia("(min-width: 569px) and (min-height: 415px)").matches) {
    $(".slider").slick(option,{
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          }
        
        },
        {
          breakpoint: 569,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
          }
        
        },
      ]
  
    });
  } else {
    $(".slider").slick(option, {
      responsive: [
        {
          breakpoint: 562,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      ]
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 3,
          variableWidth: true
        }
      },
    ]
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".slider-stages").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      focusOnSelect: true,
      centerPadding: '0px',
    });
  }

  function checkReading () {
    if (checkReading.read) {
      return; 
    }
    checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
    document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
    checkReading.noticeBox.innerHTML = checkReading.read ? "Thank you." : "Please, scroll and read the following text.";
  }

  // scroll on mousewhele
  $(".section").on("mousewheel", function(event) {
    let _this = $(this);
    
    _this.onscroll = checkReading;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
      _this.removeClass('active');
      console.log("up");
    } else {
      _this.next().addClass('active');
      console.log("down");
    }
    
  }); 

  // scroll on swipe
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
   
      swipe:function(event, direction, distance, phase, duration, fingerCount, fingerData) {
        if (direction == 'up'){
          $(this).next().addClass('active');
          if ($(this).hasClass('active')) {
            new WOW().init();
          }
          
        } else if (direction == 'down'){
          $(this).removeClass('active');
        }
      },
      allowPageScroll: "vertical",
      // swipeStatus: null,
      
      // triggerOnTouchLeave: false
  });


//   function swipeScroll(c,b,pd,f){
//     $(c).swipe({//c style must be position:absolute;top:0; b style must be position:relative;
//       swipeStatus:function(event, phase, direction, distance, fingerCount) {
//         if(phase=="start"){pd=0;}
//         // if(phase=="end"){return false;}
//         if(phase=="move" && pd!=distance){
//           var t = parseInt($(c).css("top"),10);
//           var u = (pd-distance);
//           if(direction=="up" && t != u){ t+=u; }else if(direction=="down" && t != -u){ t-=u; }
//           pd=distance;
//           if(t > 0 || $(b).height() > $(c).height()){t=0;}//top of content
//           else if(($(b).height()-t) >= $(c).height()){//bottom of content
//             t=$(b).height()-$(c).height();
//             if(typeof f != "undefined"){f();}
//           }
//           $(c).css("top",t);
//         }
//       }
//     });
// }

  // $(".swipe-read").swipe({
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
  $(".burger").click(function() {
    $(this).toggleClass('active');
    $(".navtop").toggleClass('active');
  });

});

function funonload() {
  $(".first").addClass('active');
} 
window.onload = funonload;