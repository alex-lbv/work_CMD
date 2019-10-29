$(document).ready(function () {
	$(".map-btn").on("click", function () {
        $(".map-btn, #map .map-item").removeClass("active");
        $(this).addClass("active");
        $("#map .map-item").eq($(this).index()).addClass("active");
    });

$('.test-email').keypress(function(key) {
if(key.charCode == 32 ) return false; 
});

    function calculateScore() {
        var result = 0;
        var insulin = 0;
        $(".questionnaire-item .radioJs").each(function () {
            if ($(this).find('.checkbox-wrap.active').length > 0) {
                result += parseInt($(this).find('.checkbox-wrap.active').attr('data'), 10);
            }
            if (($(this).attr("id")=="question_2")&&($(this).find('.checkbox-wrap.active').attr("data")==4)) {
            insulin += 1;
            }
            if (($(this).attr("id")=="question_3")&&($(this).find('.checkbox-wrap.active').attr("data")==4)) {
            insulin += 1;
            }
            if (($(this).attr("id")=="question_4")&&($(this).find('.checkbox-wrap.active').attr("data")==4)) {
            insulin += 1;
            }
            if (($(this).attr("id")=="question_7")&&($(this).find('.checkbox-wrap.active').attr("data")==2)) {
            insulin += 1;
            }
        });
		var tempHeight = parseInt($('.test-height').val(),10)/100;
		// tempHeight = tempHeight.replace(",", ".");
        var tempIndex = parseInt($('.test-weight').val(), 10) / (tempHeight * tempHeight);
        
if ((insulin==3)&&(tempIndex > 30)) { 
insulin+=1;
}
$("#insulin_score").text(insulin);



        if (tempIndex >= 25 && tempIndex <= 30) {
            result += 3;
        } else if (tempIndex > 30) {
            result += 5;
        }
        // console.log(tempIndex,parseInt($('.test-weight').val(),10),parseInt($('.test-height').val(),10)*parseInt($('.test-height').val(),10),parseInt($('.test-height').val(),10));
        $('.test-result').text(result);
        if (insulin == 4) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-6").addClass("visible");
        } else {
        if (result < 7) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-1").addClass("visible");
        }
        if (result >= 7 && result <= 11) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-2").addClass("visible");
        }
        if (result >= 12 && result <= 14) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-3").addClass("visible");
        }
        if (result >= 15 && result <= 20) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-4").addClass("visible");
        }
        if (result > 20) {

            $(".answer-item").removeClass("visible");
            $(".answer-item-5").addClass("visible");
        }
        }

        $.ajax({
            type: "POST",
            url: "finishtest.php",
            success: function (html) {

            }
        });

    }




    $('.scrollto').on("click", function () {
        $("html,body").animate({
            scrollTop: $('#' + $(this).attr('data')).offset().top - 50
        }, 1000)
    });

    var owl = $('.owl-slider');

    owl.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        stagePadding: 30
    });

    $(".owl-nav").wrap("<div class='owl-nav-wrap'/>")

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();


    var queCount = 0;
    var queSize = $(".questionnaire-item").length - 1;

    var passFlag = false;

    $(".q-all").text(queSize);

    $(".radioJs .checkbox-wrap").on("click", "i", function () {


        if (!$(this).parent().hasClass("active")) {
            $(this).parents(".radioJs").find(".checkbox-wrap").removeClass("active");
            $(this).parent().addClass("active");
            //  passFlag = true;
        } else {
            $(this).parents(".radioJs").find(".checkbox-wrap").removeClass("active");
            // passFlag = false;
        }

        if ($(this).parent().hasClass("select-woman")) {
            $('.gender-select .man').removeClass('active');
            $('.gender-select .woman').addClass('active');
        } else if ($(this).parent().hasClass("select-man")) {
            $('.gender-select .woman').removeClass('active');
            $('.gender-select .man').addClass('active');
        }
    });

    function changeActive() {



        $(".questionnaire-item").removeClass("active");
        $(".questionnaire-item").eq(queCount).addClass("active");

        $(".q-current").text(queCount + 1);

        if (queCount == 8) {
            $(".que-arr").hide();
            $(".btn-end").show();
        }

        if (queCount == 9) {
            $(".questionnaire-num").hide();
        }
        passFlag = false;

    }

    $(".questionnaire-wrap .que-next").on("click", function () {

        var tempVal = $(".questionnaire-item").eq(queCount).find(".checkbox-wrap").hasClass("active");

        if ($(".questionnaire-item").eq(queCount).find(".checkbox-wrap").hasClass("active")) {
            passFlag = true;
        }

        if (queCount < queSize && passFlag == true) {
            queCount++;

            changeActive();


        }

    });
    $(".questionnaire-wrap .que-prev").on("click", function () {
        if (queCount != 0) {
            queCount--;
            passFlag = true;
            changeActive();
        }

    });


    $(".btn-end").on("click", function () {

        //var temp = $(".test-height").val();
        //if ((temp.indexOf('.') + 1) || temp.indexOf(',') + 1) {
            queCount++;
            passFlag == true;
            $(".btn-end").hide();
            changeActive();
            calculateScore();
        //} else {
        //   $(".test-height").val('');
        //    $(".test-height").attr('placeholder', 'Рост, м. Пример: 1.8');
        //}


    });


    //----------------------------------------

    var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,10}\.)?[a-z]{2,10}$/i;
    var mailInput;
    var mailFlag = 0;
    var sendTrue = 0;
    var countKeyup = 0;

    $(".test-email").on("keyup", function () {

        mailInput = $(this).val();

        if (!r.test(mailInput)) {

            mailFlag = 0;

            $(this).css({
                "background-color": "rgba(255, 152, 0, 0.35)"
            });
        } else {

            mailFlag = 1;
            $(this).css({
                "background-color": "rgba(255, 255, 255,1)"
            });
        }
    });

    $(".mini-form input").keyup(function () {
        sendTrue = 0;

        $(this).parents(".mini-form").find(".btn").addClass("btn-off")

        $(this).parents(".mini-form").find("input").each(function (index) {
            if (index == 2) {
                countKeyup = $(this).val().length - 3
            } else {
                countKeyup = $(this).val().length
            }

            if (countKeyup > 3 && mailFlag == 1) {
                sendTrue = 1;

                $(this).parents(".mini-form").find(".btn").removeClass("btn-off")
            }

        })

    });


    $(".mini-form .btn").on("click", function (event) {
		event.preventDefault();
        if (sendTrue == 1) {
			$(this).text('Идет отправка...');
            $.ajax({
                type: "POST",
                url: "sendresult.php",
                data: {e:$('.test-email').val(),b:$('.test-result').eq(0).text(),insulin:$('#insulin_score').text()},
                // Выводим то что вернул PHP
                success: function (html) {
                    //предварительно очищаем нужный элемент страницы
                    $(".result-form").empty();
                    //и выводим ответ php скрипта
                    $(".result-form").append(html);

					$(".mini-form .btn").text('Отправить'); 
                    $(".result-form").fadeIn();

                    setTimeout(function () {
                        $(".result-form").fadeOut();
                    }, 2500)

                }
            });
        }
    });
});
