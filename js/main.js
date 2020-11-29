var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

var swiper = new Swiper('.swiper-container-2', {
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
});