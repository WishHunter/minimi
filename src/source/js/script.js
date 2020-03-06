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

AOS.init({
  // mirror: true,
  anchorPlacement: "center-bottom"
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
