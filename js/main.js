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
    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#topBtnRef").offset().top - 121
        }, 2000);
    });
    $('.menubtn').click(function () {
        $("nav").fadeToggle("500")
        $("nav").toggleClass("open")
        $(".quotation").toggleClass("open")
        $(".page-content").toggleClass("open")
        $(this).toggleClass('open');
        $("body").toggleClass("overflow");
    });

    if ($(window).width() < 768) {
        $(".services-links").addClass("owl-carousel");
        $('.services-links').owlCarousel({
            items: 1,
            autoplay: false,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
        });
    } else {
        $(".services-links").removeClass("owl-carousel");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1) {
            $("header.single-pro").addClass("fixed");
        } else {
            $("header.single-pro").removeClass("fixed");
        }
    });
});