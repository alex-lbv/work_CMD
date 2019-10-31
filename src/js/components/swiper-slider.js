$(document).ready(function () {

	var swiperTest = new Swiper('.test__container', {
		spaceBetween: 100,
		touchRatio: 0,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.swiper-next'
		},
		breakpoints: {
			1200: {
				autoHeight: true
			}
		},
		on: {
			init: function init() {
				this.allowSlideNext = false;
			},
			slideChange: function slideChange() {
				this.allowSlideNext = false;
			},
			
			reachEnd: function reachEnd() {
				$('.swiper-next').addClass('uk-hidden');
				$('.test-end').removeClass('uk-hidden');
			},
		}
	});

	$('body').on('click', '.swiper-slide-active label', function () {
		swiperTest.allowSlideNext = true;
	});
});