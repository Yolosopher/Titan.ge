const topProductsSlider = new Swiper('.top-prod-slider', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  navigation: {
    nextEl: '.top-prod-slider-next',
    prevEl: '.top-prod-slider-prev',
  },
});

const coverSlider = new Swiper('.home-main-container', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.coverPagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.coverSlideNext',
    prevEl: '.coverSlidePrev'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  let btns = document.querySelectorAll('.top-prod-add-btn');

  for (let btn of btns) {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let shopCart = '.svg-shopping-cart';
      let checkCircle = '.svg-check-circle';

      btn.querySelector('div').style.display = 'none';

      if (btn.querySelector('div').innerText === 'დამატება') {
        btn.classList.toggle('pressed');
        
        setTimeout(() => {
          btn.querySelector(shopCart).classList.toggle('hidden');
        }, 1000);
        setTimeout(() => {
          btn.querySelector(checkCircle).classList.toggle('hidden');
        }, 1500);
        setTimeout(() => {
          if (btn.querySelector('div').innerText === 'დამატება') {
            btn.querySelector('div').innerHTML = 'დამატებულია';
          } else {
            btn.querySelector('div').innerHTML = 'დამატება';
          }
          btn.querySelector('div').style.display = 'unset';
        }, 3000);
        setTimeout(() => {
          btn.classList.remove('pressed');
          btn.classList.toggle('pressed-out');
        }, 2000);
      } else { // ELSE
        btn.classList.toggle('pressed');
        
        setTimeout(() => {
          btn.querySelector(checkCircle).classList.toggle('hidden');
        }, 1000);
        setTimeout(() => {
          btn.querySelector(shopCart).classList.toggle('hidden');
        }, 1500);
        setTimeout(() => {
          if (btn.querySelector('div').innerText === 'დამატება') {
            btn.querySelector('div').innerHTML = 'დამატებულია';
          } else {
            btn.querySelector('div').innerHTML = 'დამატება';            
          }
          btn.querySelector('div').style.display = 'unset';
        }, 3000);
        setTimeout(() => {
          btn.classList.remove('pressed');
          btn.classList.toggle('pressed-out');
        }, 2000);
      }
    //   OUT OF IF-ELSE
      setTimeout(() => {
        btn.classList.remove('pressed');
        btn.classList.remove('pressed-out');
      }, 3001);
    });
  }
});

// burger menu
$("#header-nav").click(function () {
  $("#burger-header").slideToggle(200, function() {
    if ($(this).is(':visible')) {
      $(this).css('display', 'flex')
    }
  });
});

$('.decrement').click(function(){
  const nah = $('.product-name').html();
  console.log(nah);
})

// single-product-page slider
const swiper4 = new Swiper('.product-image-slider-outer', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.sg-next',
    prevEl: '.sg-prev',
  },
});


window.addEventListener('DOMContentLoaded', (event) => {
  // single-product.html first-image active
  let firstImg = document.querySelector('.pr-i-s-img');
  firstImg.classList.add('marked')
  // single-product.html onclick main photo change
  $('.pr-i-s-img').click(function(){
    $('.pr-i-s-img').removeClass('marked');
    $(this).addClass('marked');
    let src = $(this).find('img').attr('src');
    let mainChsnPhoto = $('.product-main-image');
    mainChsnPhoto.fadeOut(400, function () {
      let viewPortWidth = window.innerWidth;
      if (viewPortWidth > 580) {
        $(this).attr('src', src).fadeIn(400)
      } else {
        $(this).attr('src', src)
      }
    });
  });
});

  // profile.html profile-nav-li-active
  let profNavLi = $('.profile-nav-li');
  $('.profile-nav-li').click(function(){

    $('.profile-nav-li').removeClass('profile-nav-li-active');
    $(this).addClass('profile-nav-li-active');
  });


