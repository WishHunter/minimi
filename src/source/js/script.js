import { testing } from "./test";
import { openPopup, closePopup } from "./popup";
import Swiper from "swiper";
import AOS from "aos";

testing();

var swiper = new Swiper(".hero__slider", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".hero__slider-pagination",
    clickable: true
  }
});

var swiper = new Swiper(".reviews__slider", {
  loop: true,
  speed: 500,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      }
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

  pagination: {
    el: ".reviews__slider-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.reviews__slider-button-next',
    prevEl: '.reviews__slider-button-prev',
  },
});

AOS.init({
  anchorPlacement: "center-bottom",
  disable: "mobile"
});

const btnsOpenPopup = document.querySelectorAll('.js-open-popup');
const btnClosePopup = document.querySelector('.js-close-popup');

Array.from(btnsOpenPopup).forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
  })
});

btnClosePopup.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup();
})
