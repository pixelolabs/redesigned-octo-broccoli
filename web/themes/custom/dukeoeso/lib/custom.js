

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
  })