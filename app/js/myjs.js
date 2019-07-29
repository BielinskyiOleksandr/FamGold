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

});

