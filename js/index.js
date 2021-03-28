$(document).ready(function(){
    // $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     lazyLoad: true,
    //     // autoplay: true,
    //     autoplayTimeout: 2500,
    //     autoplayHoverPause: true,
    //     margin: 30,
    //     stagePadding: 100,
    //     responsive: {
    //         0 : {
    //             items: 1,
    //             nav: false,
    //         },
    //         // breakpoint from 480 up
    //         576 : {
    //             items: 2
    //         },
    //         // breakpoint from 768 up
    //         768 : {
    //             items: 1,
    //         }
    //     },
    //     center: true,
    // });

    $('.owl-carousel').slick({
        autoplay: true
    });

    $('.list-toggler').click(function() {
        const nextEl = $(this).next();
        if ($(this).data('collapsed') === false) {
            nextEl.slideUp();
            $(this).data('collapsed', true);
        } else {
            $('.list-container').find('.inside-list__wrapper').slideUp();
            nextEl.slideDown();
            $(this).data('collapsed', false);
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});
