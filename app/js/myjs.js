$(document).ready(function () {

    $(".counrty-watch").on("click", function(){
        $(".contact-tab-map-container ul").slideToggle("fast");
    });

    $(".nav-menu-button, .close").on("click", function () {
        $(".header-menu").toggle(150);
        $("body").toggleClass("body-hid");
    });

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,

        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.item-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.tabs-text-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });

    $(".owl-carousel").owlCarousel();

    $(".sort-disabled").on("click", function (e) {
        e.preventDefault();
        $(".sort-disabled").removeClass("sort-active");
        $(this).addClass("sort-active");
    });

    $(".mob-katalog").on("click", function (e) {
        e.preventDefault();
        $(".katalog-link, .sort").toggle(100);
    });

    $('.up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    var navFixed = $(".header"),
        navHeight = $('.header').height();

    if ($(window).scrollTop()) {
        navFixed.addClass("fixed").removeClass("nofixed");
    }

    if (navFixed.length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll < navHeight + 50) {
                navFixed.addClass("nofixed");
                navFixed.removeClass("fixed hidden");
            }
            if (scroll > navHeight) {
                navFixed.addClass("hidden");
            }
            if (scroll > navHeight + 50) {
                navFixed.addClass("fixed");
                navFixed.removeClass("nofixed");
            }
        });
    }

    $('ul.tabs-link').on('click', 'li:not(.active)', function (e) {
        e.preventDefault();
        $(this)
            .addClass('active-tab').siblings().removeClass('active-tab')
            .closest('div.item-tabs-container').find('div.tabs-content').removeClass('tabs-content-active').eq($(this).index()).addClass('tabs-content-active');
    });

    $('ul.map-ul').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
        $(this)
          .addClass('map-li-active').siblings().removeClass('map-li-active')
          .closest('div.contact-tab-map-container').find('div.map-content-disabled').removeClass('map-content-active').eq($(this).index()).addClass('map-content-active');
    });    

    $(".poster").on("click",function(){
        $(this).hide("fast");
        $(".video").css({"opacity":"1"});
        $(".video").attr('controls', '');
        $(".video")[0].play();
    });

    $(".review-box").on("click", function () {
    	$(this).addClass("active-video");
    	if ($('.review-box').hasClass('active-video')) {
    		$(".active-video .video-min").attr('controls', '');
    		$(".active-video .video-min").css({
    			"z-index": 4
    		});
    		$(this).find(".video-min")[0].play();
    	}
    });

    $(".review-container>:not(:eq(0))").hide();

    $(".review-vidos").on("click",function(e){
        e.preventDefault();
        $(".review-container>:not(:eq(0))").toggle("fast");
    });

});