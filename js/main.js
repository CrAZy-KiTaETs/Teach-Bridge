document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

new WOW().init();
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  effect: "cards",
  autoplay: {
    delay: 5000,
  },
});
const faviconTag = document.getElementById("faviconTag");
const isLight = window.matchMedia("(prefers-color-scheme: dark)");

function changeFavicon() {
  if (isLight.matches) faviconTag.href = "/favicon/favicon.ico";
  else faviconTag.href = "/favicon/favicon-dark.ico";
}
changeFavicon();
