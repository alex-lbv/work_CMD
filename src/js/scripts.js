//= jquery.js
//= uikit.js
//= swiper.js
//= components/test.js
//= components/swiper-slider.js

$('body').on('click', '.myths-swiper-next', function () {
  $('.swiper-slide:not(.uk-hidden)').next().removeClass('uk-hidden');
});