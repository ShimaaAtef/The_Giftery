// call owl carousel plugin
$(document).ready(function() {
    $("#hero-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    });
});