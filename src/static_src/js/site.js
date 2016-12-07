$(document).ready(function(){

    $('.slick_slider').slick({
        dots: true,
        appendDots: $('.slide_dots'),
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7500
    });

    $(".menu_button").click(function() {
        $('#nav').toggleClass("navigation_active");
    });
});