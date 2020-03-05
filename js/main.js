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
});