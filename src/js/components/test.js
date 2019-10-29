$('body').on('click', '.recalc-btn', function () {
  var total = 0;
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

  console.log(bodyIndex);
  console.log(total);
});