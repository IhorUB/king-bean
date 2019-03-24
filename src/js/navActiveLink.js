import $ from "jquery";

$(document).ready(function() {
    $('.nav-list').on('click', '.nav-link',function () {
        $('.nav-link').removeClass('active-nav');
        $(this).addClass('active-nav');
    });
});