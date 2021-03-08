const main = document.querySelector(".main");
const nav = document.querySelector(".navbar");

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

$(function () {
  $(".navbar-nav a").click(function () {
    $(".nav-link").removeClass("active");
    // $(".navba-nav a").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  $("#see-my-work").click(function () {
    // $(".navba-nav a").removeClass("active");
    $(".contact-link").addClass("active");
  });
});

jQuery(function ($) {
  $(".about-link").click(function (e) {
    // e.preventDefault();

    $("html,body").animate(
      {
        scrollTop:
          $(
            "#" + $(".about-link").attr("href").split("#").slice(-1)[0]
          ).offset().top - $(".x-navbar").height(),
      },
      700,
      "swing"
    );
  });
});
