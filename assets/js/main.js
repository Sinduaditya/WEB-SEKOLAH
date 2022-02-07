$(document).ready(function () {
  $("#slider-hero").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    margin: 0,
    navText: ["<i class='fa fa-angle-left' aria-hidden='true'><i>", "<i class='fa fa-angle-right' aria-hidden='true'><i>"],
    navContainer: "#slider-hero-nav",
  });
});

document.querySelectorAll(".projcard-description").forEach(function (box) {
  $clamp(box, { clamp: 6 });
});
