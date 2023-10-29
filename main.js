$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});

$(document).ready(function () {
  $(".carousel-wrapper").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".left-arrow"),
    nextArrow: $(".right-arrow"),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
        },
      },
    ],
  });
});