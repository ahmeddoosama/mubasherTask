/*global $, jQuery, alert*/
$(function () {
    'use strict';

    $(window).on('load', function () {
        $(".loader").delay(600).fadeOut();
    });

    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });

    $("#nav .navbar-nav a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

    $("#nav .navbar-nav a[href^='#']").on('click', function (){
        $("#nav").toggleClass('open');
    })

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