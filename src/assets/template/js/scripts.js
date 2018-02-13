$(function() {

    var main_slider = $('.main-slider');
    main_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slick-prev', main_slider).on('click', function(){
        main_slider.slick('slickPrev');
    });
    $('.slick-next', main_slider).on('click', function(){
        main_slider.slick('slickNext');
    });

    $('.main-service__more-btn').click(function(){
        var _this = $(this);
        var tab = ".main-service__item";
        if (_this.parents(tab).hasClass('active')) {
            _this.parents(tab).removeClass('active');
            return false;
        }
        
        var timeout = 300;
        if ($(tab+'.active').length==0) {
            timeout = 0;
        }

        $(tab).removeClass('active');

        setTimeout(function(){
            _this.parents(tab).addClass('active'); 
        }, timeout);    
        
        return false;
    });

    $(".header__burger").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile-menu'
    });

    auth = function() {
        if ($('.auth-form').length) {
            $.magnificPopup.open({
                items: {
                    src: '.auth-form'
                },
                type: 'inline'
            });
        }
        return false;
    }
    $('.polls__start a').click(function(){
        auth();
    });

    $('.auth-form__toggle-password').click(function(){
        input_password = $('.auth-form__password input');
        if (input_password.attr('type')=="password"){
            input_password.attr('type', 'text');
        } else {
            input_password.attr('type', 'password');
        }
    });





    var news_slider = $('.main-news__list');

    news_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    var remuneration_list = $('.remuneration__list');
    remuneration_list.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true
                }
            }
        ]
    });


    var management_list = $('.management__list');
    management_list.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true
                }
            }
        ]
    });


    initSlider = function() {
        //$('title').html($(window).width());


        if($(window).width() > 750) {
            if (news_slider.hasClass('slick-initialized')) {
                news_slider.slick('unslick');
            }
        }else{
            $('.main-news__list').slick('reinit');
        }

    }


    $(document).on('click', '.remuneration__toggle', function() {
        item = $(this).parents('.management__item,.remuneration__item');
        if (item.hasClass('open')){
            item.removeClass('open');
        } else {
            item.addClass('open');
        }

        return false;
    });

    

//    initSlider();




    $('select.selectric').selectric({
        maxHeight: 210
    });


    $('.zoom').magnificPopup({
        type  : 'image'
    });

    $('.product-big__slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 100
        },
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled:true
        }
    });
    
});

$(".btn-up").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
});

$(window).resize(function(){
//    moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
    initSlider();
    //$('.main-news__list').slick('reinit');
});
