$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
$(document).ready(function () {
    new WOW().init();
    $('.menubtn').click(function () {
        $("nav").fadeToggle("500")
        $("nav").toggleClass("open")
        $(".quotation").toggleClass("open")
        $(".page-content").toggleClass("open")
        $(this).toggleClass('open');
    });
});