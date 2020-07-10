var topProductsSlider = new Swiper('.top-prod-slider', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  navigation: {
      nextEl: '.top-prod-slider-next',
      prevEl: '.top-prod-slider-prev',
  }
});
$(document).ready(function () {
    $('.slider-arrows div').on("mouseenter", function () {
        let a = $(this).find('div').find('path');
        a.addClass('b');
        console.log(a);
        // a.fadeOut(400, function () {
        //     $(this).attr('src', src).fadeIn(400)
        //   });
    });
});
