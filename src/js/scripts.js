//= jquery.js
//= uikit.js
//= swiper.js
//= components/test.js
//= components/swiper-slider.js

/* Myths button */
$('body').on('click', '.myths-swiper-next', function () {
  $('.swiper-slide:not(.uk-hidden)').next().removeClass('uk-hidden');
});

$("#result-input-1").blur(function () {
  if ($(this).val() == '') {
    $('#test__result-danger-1').removeClass('uk-hidden');
  }
  if ($(this).val() !== '') {
    $('#test__result-danger-1').addClass('uk-hidden');
  }
});
$("#result-input-2").blur(function () {
  if ($(this).val() == '') {
    $('#test__result-danger-2').removeClass('uk-hidden');
  }
  if ($(this).val() !== '') {
    $('#test__result-danger-2').addClass('uk-hidden');
  }
});
$("#result-input-3").blur(function () {
  if ($(this).val() == '') {
    $('#test__result-danger-3').removeClass('uk-hidden');
  }
  if ($(this).val() !== '') {
    $('#test__result-danger-3').addClass('uk-hidden');
  }
});
$("#result-input-4").blur(function () {
  if ($(this).val() == '') {
    $('#test__result-danger-4').removeClass('uk-hidden');
  }
  if ($(this).val() !== '') {
    $('#test__result-danger-4').addClass('uk-hidden');
  }
});
$("#result-input-5").blur(function () {
  if ($(this).val() == '') {
    $('#test__result-danger-5').removeClass('uk-hidden');
  }
  if ($(this).val() !== '') {
    $('#test__result-danger-5').addClass('uk-hidden');
  }
});

$("#test-btn-1").on('click', function () {
  if ($('#result-input-1').val() !== '') {
    $('#test__result-available-1').removeClass('uk-hidden');
  }
  if ($('#result-input-1').val() == '') {
    $('#test__result-available-1').addClass('uk-hidden');
  }
});
$("#test-btn-2").on('click', function () {
  if ($('#result-input-2').val() !== '') {
    $('#test__result-available-2').removeClass('uk-hidden');
  }
  if ($('#result-input-2').val() == '') {
    $('#test__result-available-2').addClass('uk-hidden');
  }
});
$("#test-btn-3").on('click', function () {
  if ($('#result-input-3').val() !== '') {
    $('#test__result-available-3').removeClass('uk-hidden');
  }
  if ($('#result-input-3').val() == '') {
    $('#test__result-available-3').addClass('uk-hidden');
  }
});
$("#test-btn-4").on('click', function () {
  if ($('#result-input-4').val() !== '') {
    $('#test__result-available-4').removeClass('uk-hidden');
  }
  if ($('#result-input-4').val() == '') {
    $('#test__result-available-4').addClass('uk-hidden');
  }
});
$("#test-btn-5").on('click', function () {
  if ($('#result-input-5').val() !== '') {
    $('#test__result-available-5').removeClass('uk-hidden');
  }
  if ($('#result-input-5').val() == '') {
    $('#test__result-available-5').addClass('uk-hidden');
  }
});

$('form').submit(function () {
  doSomething();
});