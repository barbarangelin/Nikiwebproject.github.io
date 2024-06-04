    $('.slider-main').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  