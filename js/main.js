/*global $, jQuery, alert*/
$(function () {
    'use strict';

    // Featured Work Shuffle
    $('.portfolio ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md .imghvr-zoom-out').css('opacity', 1);
        } else {
            $('.shuffle-images .col-md .imghvr-zoom-out').css('opacity', 0);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

    // Caching The Scroll Top Element
    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) scrollButton.show();
        else scrollButton.hide();
    });

    // Click On Button To Scroll Top
    scrollButton.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });
})