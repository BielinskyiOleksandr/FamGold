$(document).ready(function() {
    $(".nav-menu-button").on("click", function() {
        $(".header-menu").slideToggle(200);
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".owl-carousel").owlCarousel();

    $(".sort-disabled").on("click", function(e){
        e.preventDefault();
        $(".sort-disabled").removeClass("sort-active");
        $(this).addClass("sort-active");
    });

    $(".mob-katalog").on("click", function(e){
        e.preventDefault();
        $(".katalog-link, .sort").toggle(100);
    });

    
	var navFixed = $(".header"),
    navHeight = $('.header').height();

    if ($(window).scrollTop()) {
        navFixed.addClass("fixed").removeClass("nofixed");
    }

    if (navFixed.length) {
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            
            if (scroll < navHeight + 50) {
                navFixed.addClass("nofixed");
                navFixed.removeClass("fixed hidden");
            }
            if (scroll > navHeight){
                navFixed.addClass("hidden");
            }
            if (scroll > navHeight + 50){
                navFixed.addClass("fixed");
                navFixed.removeClass("nofixed");
            }
            
        });
    }

});

