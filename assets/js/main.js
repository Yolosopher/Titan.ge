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

// check title and chane the respo-menu color
const burgerRespo = document.getElementById('burger-respo');
const srchbarRespo = document.querySelector('.srchbar-respo');
const shopRespo = document.querySelector('.respo-shop');
const loginRespo = document.querySelector('.respo-login');
const allRespo = [burgerRespo, srchbarRespo, shopRespo, loginRespo];

function checkPage() {
  allRespo.forEach(el => el.classList.remove('respo-active'));
  let title = document.title;
  if (title == 'Home') {
    burgerRespo.classList.add('respo-active');
  } else if (title == 'Profile') {
    loginRespo.classList.add('respo-active');
  } else if (title == 'Card') {
    shopRespo.classList.add('respo-active');
  }
};
checkPage();

// auth-toggle
$('.login').click(function () {
  $('#auth-toggle').addClass('after');
  $('#auth-toggle').animate({
    'padding': '20px 81px 20px 102px',
    'width': '572px'
  }, 700, 'swing');
  $('.auth-toggle-black-screen').addClass('on');
  $('html').css({
    "overflow": "hidden"
  });
});
$('#exit-auth-toggle').click(function () {
  $('#auth-toggle').removeClass('after');
  $('#auth-toggle').animate({
    'padding': '20px 0 20px 0',
    'width': '0'
  }, 700, 'swing');
  setTimeout(() => {
    $('.auth-toggle-black-screen').removeClass('on');
    $('html').css({
      "overflow": "unset"
    });
  }, 700);

});


let authMail = $('input[type=email]');

authMail.change(function() {
  let checkPass = $(this).parent().find('.auth-succ-or-error');
  let val = $(this).val();
  let dz = val.split('@')[1];
  if (!dz) checkPass.addClass('error');
  if (/\./.test(dz)) {
    checkPass.removeClass('error').addClass('success');
  } else {
    checkPass.removeClass('success').addClass('error');
  }
});

let authPass = $('input[type=password]');

authPass.change(function() {
  let checkPass = $(this).parent().find('.auth-succ-or-error');
  let val = $(this).val();
  let w, d;  
  w = /[a-zA-Z]/.test(val);
  d = /\d/.test(val);
  console.log(w + ' ' + d);
  if (w && d && val.length >= 8) {
    checkPass.removeClass('error').addClass('success');
  } else {
    checkPass.removeClass('success').addClass('error');
  }
});


// auth & register & passReset switching
$('.register').click(function () {
  $('#back-to-auth').addClass('register-active');
  $('#auth-toggle-form').addClass('none');
  $('#passreset-form').addClass('none');
  $('#regis-toggle-form').removeClass('none');
  $('.register').addClass('register-active');
});
$('#back-to-auth').click(function () {
  $(this).removeClass('register-active');
  $('#regis-toggle-form').addClass('none');
  $('#passreset-form').addClass('none');
  $('#auth-toggle-form').removeClass('none');
  $('.register').removeClass('register-active');
});
$('#pass-reset').click(function() {
  $('#back-to-auth').addClass('register-active');
  $('#passreset-form').removeClass('none');
  $('#auth-toggle-form').addClass('none');
  $('#regis-toggle-form').addClass('none');
  $('.register').addClass('register-active');
});