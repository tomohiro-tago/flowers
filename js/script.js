$(function (){
  $('#menu-toggle').on('click', function (){
    $('body, #menu-toggle, #menu-nav').toggleClass('open');
  })
});

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  speed: 600,
  effect: 'fade',
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})