const main = document.querySelector(".main");
const nav = document.querySelector(".navbar");

const offset = main.offsetHeight - nav.offsetHeight;
$(document).ready(function () {
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
      const href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(href).offset().top - 66 }, 300);
      $(".navbar-nav a").removeClass("active");
      $(".contact-link").addClass("active");
    });
  });

  $(".about-link").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 86 }, 300);
  });
  $(".contact-link").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 300);
  });
  $(".portfolio-link").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 86 }, 300);
  });
  function setActiveListElements(e) {
    // e.preventDefault;
    // Get the offset of the window from the top of page
    var windowPos = $(window).scrollTop() - 400;

    $(".navbar-nav a[href^='#']").each(function () {
      var anchorId = $(this);
      var target = $(anchorId.attr("href"));

      if (target.length > 0) {
        if (
          target.position().top <= windowPos &&
          target.position().top + target.height() > windowPos
        ) {
          $(".navbar-nav a").removeClass("active");
          anchorId.addClass("active");
        }
      }
    });
  }
  $(window).scroll(function () {
    setActiveListElements();
  });
});
