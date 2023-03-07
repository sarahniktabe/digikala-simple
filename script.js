
var swiper1 = new Swiper('#swiper1', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});



var swiper2 = new Swiper("#swiper2", {
    direction: 'horizontal',
    slidesPerView: 6,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


var swiper3 = new swiper('.swiper3', {
  slidesPerView: 7,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  on: {
    resize: function () {
      swiper3.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'horizontal': 'vertical';

  return direction;
}