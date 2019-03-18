import Swiper from 'swiper';

function slidesResponse() {
    if ($(window).width() < 576) {
        return 1;
    } else if ($(window).width() > 576 && $(window).width() < 770) {
        return 2;
    } else if ($(window).width() > 768 && $(window).width() < 976) {
        return 3;
    } else {
        return 4;
    }
}

$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: slidesResponse(),
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});