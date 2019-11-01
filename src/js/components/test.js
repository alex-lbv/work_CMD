var total = 0;

$('body').on('click', '.swiper-button-disabled', function () {

  $(":radio:checked").each(function () {
    total += Number(this.value);
  });

  var personWeight = $('#weight').val();
  var personHeight = $('#height').val();

  var bodyIndex = Math.ceil(personWeight / (Math.pow((personHeight / 100), 2)));
  if (bodyIndex >= 25 && bodyIndex <= 30) {
    total += 3;
  } else if (bodyIndex > 30) {
    total += 54;
  }
  /* testResult() */

  console.log(bodyIndex);
  console.log(total);
});

function num2str(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

function testResult() {
  $('.test__wrap').addClass('uk-hidden');

  if (total < 7) {
    $('.test__result-1').removeClass('uk-hidden');
  } else if (total >= 7 && total <= 11) {
    $('.test__result-2').removeClass('uk-hidden');
  } else if (total >= 12 && total <= 14) {
    $('.test__result-3').removeClass('uk-hidden');
  } else if (total >= 15 && total <= 20) {
    $('.test__result-4').removeClass('uk-hidden');
  } else if (total > 20) {
    $('.test__result-5').removeClass('uk-hidden');
  }
  $('.your-points').html(total + '<span class="your-point-word">'+ num2str(total, ['балл', 'балла', 'баллов'])+'</span>');


};

$("#height").keydown(function (e) {
  $('.test-end').addClass('active-2');
});

$("#weight").keydown(function (e) {
  $('.test-end').addClass('active-1');
});