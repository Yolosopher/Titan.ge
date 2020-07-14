var topProductsSlider = new Swiper('.top-prod-slider', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  navigation: {
    nextEl: '.top-prod-slider-next',
    prevEl: '.top-prod-slider-prev',
  },
});

var coverSlider = new Swiper('.home-main-container', {
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
const burger = document.getElementById('burger');
