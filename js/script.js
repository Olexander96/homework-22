$(document).ready(function() {

    $('.partner__slider').slick({
        centerMode: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-left.svg" alt="slick-arrow" class="arrow-left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="slick-arrow" class="arrow-right">',
        infinite: true,

        responsive: [
            {
              breakpoint: 1280,
              settings: {
                centerMode: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                  centerMode: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
          ]
      });

      $('.guitar__slider').slick({
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-left.svg" alt="slick-arrow" class="arrow-left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="slick-arrow" class="arrow-right">',
        infinite: true,
        focusOnSelect: true,

        responsive: [
            {
              breakpoint: 1280,
              settings: {
                centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
              },
          ]
      });

}) 