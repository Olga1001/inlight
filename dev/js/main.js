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
          breakpoint: 561,
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
  $(".section").swipe({
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'up'){
            $(this).next().addClass('active');
          } else if (direction == 'down'){
            $(this).removeClass('active');
          }
      },
      allowPageScroll: "auto",
  });
 
  // initialization animation - wow
  new WOW().init();

  // burger 
  $(".burger").click(function() {
    $(this).toggleClass('active');
    $(".navtop").toggleClass('active');
  });
});