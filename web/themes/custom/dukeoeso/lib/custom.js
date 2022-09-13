

jQuery(function () {

  /*Sidebar*/
  $(".js__section-navigation-link").on("click", function () {
 
    $(this).toggleClass("active");
    $(".js__section-navigation").toggleClass("active");
  })

  $(".js__section-navigation-link").keypress(function(e){
    if(e.which == 13){
      $(this).toggleClass("active");
      $(".js__section-navigation").toggleClass("active");
    }
  })
  $(".js__section-navigation").children("ul").children("li").children("a").on("click", function () {
    if($(this).parent("li").children(".submenu").css("display")=="none")
    {
      $(this).addClass("active")
      $(this).parent("li").children(".submenu").slideDown();
    }
    else
    {
      $(this).removeClass("active")
      $(this).parent("li").children(".submenu").slideUp();
    }
    
  })

 

  $(".js__section-navigation").children("ul").children("li").children("a").keypress(function(e){
    if(e.which == 13){
      if($(this).parent("li").children(".submenu").css("display")=="none")
      {
        $(this).addClass("active")
        $(this).parent("li").children(".submenu").slideDown();
      }
      else
      {
        $(this).removeClass("active")
        $(this).parent("li").children(".submenu").slideUp();
      }
    }
  })
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
    
      if (scroll >= 100) {
        sticky.addClass('fixed');
        $('.js__top-alert-notification').addClass("fixed");
      }
      else
      {
         sticky.removeClass('fixed');
        $('.js__top-alert-notification').removeClass("fixed");
      }
      
    });

    $(".js__accordian").children("li:first-child").addClass("active");
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

    $(".js__accordian")
    .children("li")
    .children("h5,h6,h3").keypress(function(e){
      if(e.which == 13){
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
      }
    })


    /*Header*/
    $(".js__mobile-hamburger").on("click", function () {
      $(".js__menu-section").addClass("active");
      $(".js__menu-section").removeClass("inactive");
    });
   
    $(".js__mobilemenu-close").on("click", function () {
      $(".js__menu-section").removeClass("active");
      $(".js__menu-section").addClass("inactive");
    });
    
    $(".js__header-has-sub").children(".menu-wrapper").children("a").on("click", function () {
      var windowsize = $(window).width();
        if (windowsize < 981) {
      if($(this).parent(".menu-wrapper").children(".sub-menu-wrapper").css("display")=="none")
      {
        $(this).addClass("active");
        $(this).parent(".menu-wrapper").children(".sub-menu-wrapper").slideDown();
       
      }
      else
      {
      $(this).removeClass("active");
      $(this).parent(".menu-wrapper").children(".sub-menu-wrapper").slideUp();
      }
    }
    });

    /*Top alert close*/
    $(".js__top-alert-notification-close").on("click", function () {
      $('.js__main-header').css("top","0");
      $('.wrapper').addClass("alert-hide");
      $('.js__top-alert-notification').addClass("alert-hide");
    })


    /*active link while submenu open */
 
    
    if ($(window).width() > 980) {
      $(".js__header-has-sub").mouseover(
        function () {
          $(this).addClass("active");
         
        }
      );
      $(".js__header-has-sub").mouseout(
        function () {
          $(this).removeClass("active");
        }
      );
      
    }

    /*Keyboard tabbing*/
     /*Adding Tab index*/
      $("a").attr("tabindex", "0");

      $(".js__header-has-sub").find(".primary-item").removeAttr("tabindex");
      $(".js__header-has-sub").attr("tabindex", "0");
      if ($(window).width() > 980) {
      $(".js__header-has-sub").focus(function () {
        $(".js__header-has-sub").removeClass("active");
        $(this).addClass("active");
      });
      $(".primary-item").focus(function () {
        $(".js__header-has-sub").removeClass("active");
      
      });
    }
    else
    {
      $(".js__header-has-sub").keypress(function(e){
        if(e.which == 13){
      //$(".js__header-has-sub").focus(function () {
       $(this).children(".menu-wrapper").children("a").click();
        }
      });
     

    }

      $(".js__mobile-hamburger").focus(function () {
        $(".js__menu-section").addClass("active");
        $(".js__menu-section").removeClass("inactive");
      });
     
      $(".js__mobilemenu-close").focus(function () {
        $(".js__menu-section").removeClass("active");
        $(".js__menu-section").addClass("inactive");
      });
      

      
      $(".js__accordian").children("li").children("h6").attr("tabindex", "0");

    


    
  })

