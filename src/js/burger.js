import $ from 'jquery';
/*init mobile burger*/

$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

});

/*Show mobile menu with burger*/

$(document).ready(function () {
    $('.hamburglar').click(function () {
        $('.nav-list').toggleClass('active');
        $('nav').toggleClass('bg-respons-color');
    })
});


/*change bg-color for nav area during the scroll*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("nav").addClass("bg-nav-scroll-change")
        }
        if ($(this).scrollTop() == 0) {
            $("nav").removeClass("bg-nav-scroll-change")
        }
        if ($(window).width() < 993) {
            $("nav").removeClass("bg-nav-scroll-change")
        }
    });
});

