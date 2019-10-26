$(document).ready(function () {
	var swiperMyths = new Swiper('.myths__container', {
		loop: true,
		spaceBetween: 100,
		touchRatio: 0,
		navigation: {
			nextEl: '.swiper-next',
		},
		breakpoints: {
			1200: {
				autoHeight: true,
			}
		},
	});
});