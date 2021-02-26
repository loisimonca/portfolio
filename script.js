const main = document.querySelector(".main");
const nav = document.querySelector(".navbar");
const translate = document.querySelectorAll(".translate");
const transloose = document.querySelectorAll(".transloose");
const graphicHeader = document.querySelector(".graphic-designer");
const webDevHeader = document.querySelector(".web-developer");
const iAm = document.querySelector(".i-am-a");
const iAmLois = document.querySelector(".i-am-lois");
const header = document.querySelector("header");
let header_height = header.offsetHeight;
// console.log(header.offsetHeight);

const offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
  if (window.pageYOffset > offset) {
    nav.classList.remove("bottom-nav");
    nav.classList.add("top-nav");
  } else {
    nav.classList.add("bottom-nav");
    nav.classList.remove("top-nav");
  }
};

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  console.log(scroll);
  console.log(header_height);
  // transloose.forEach((El) => {
  //   let speed = El.dataset.speed;
  //   El.style.transform = `translateY(${scroll * speed}px)`;
  // });
  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
  webDevHeader.style.opacity = -scroll / (header_height / 10) + 2.6;
  graphicHeader.style.opacity = -scroll / (header_height / 2) + 1.1;
  // if (scroll < 50) {
  //   graphicHeader.style.opacity = scroll / (header_height * 12);
  // } else {
  //   graphicHeader.style.opacity = 1;
  // }
  // if (scroll > 300) {
  //   graphicHeader.style.opacity = -scroll / (header_height / 2) + 1;
  // }
  if (scroll > 400) {
    iAm.style.opacity = -scroll / header_height + 0.6;
    iAmLois.style.opacity = -scroll / header_height + 0.6;
  } else {
    iAm.style.opacity = 1;
    iAmLois.style.opacity = 1;
  }
});
