$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
$(document).ready(function () {
    $('select').selectpicker({
        dropupAuto: false
    });
    new WOW().init();
    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#topBtnRef").offset().top - 121
        }, 2000);
    });
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var offset = 70;
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 121
        }, 1000, 'swing');
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


$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});