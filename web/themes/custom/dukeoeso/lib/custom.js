

jQuery(function () {
    /* SLIDER */
  
    var heroSlider = new Swiper(".js__hero-banner-slider", {
      slidesPerView: 1,
      direction: "vertical",
      pagination: {
        el: ".hero-swiper-pagination",
        clickable: true,
        
      },
      navigation: {
        nextEl: ".swiper-button-next-hero-banner",
        prevEl: ".swiper-button-prev-hero-banner",
      },
    });

    $(window).scroll(function(){
      var sticky = $('.js__main-header'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

/*Accrodian*/
    $(".js__accordian")
    .children("li")
    .children("h5,h6,h3")
    .click(function (e) {
      if ($(this).parent("li").children(".content").css("display") == "none") {
        $(this)
          .parent("li")
          .parent(".js__accordian")
          .children("li")
          .children(".content")
          .hide();
        $(this)
          .parent("li")
          .parent(".js__accordian")
          .children("li")
          .removeClass("active");
        $(this).parent("li").children(".content").slideDown();
        $(this).parent("li").addClass("active");
        /* $('html,body').animate({
          scrollTop: $(this).offset().top - 120
        }, 500);*/
      } else {
        $(this).parent("li").children(".content").slideUp();
        $(this).parent("li").removeClass("active");
      }
    });
  })

