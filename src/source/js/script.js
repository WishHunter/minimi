import { testing } from "./test";
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
