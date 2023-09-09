import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 使用 esm.sh 的 規則匯入外部套件js的cdn
// swiper
import Swiper from 'https://esm.sh/swiper@10/swiper-bundle.min.js';
var swiper = new Swiper(".mySwiper", {
  // 預設從行動版開始
  slidesPerView: 4,
  spaceBetween: 24,
  mousewheel: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: false,
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 24,
      mousewheel: true,
    },
    // 768以上
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      mousewheel: true,
    },
    //992 以上
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      mousewheel: true,
    },
  },
});


// aos
import aos from "https://esm.sh/aos@2.3.1";
aos.init();