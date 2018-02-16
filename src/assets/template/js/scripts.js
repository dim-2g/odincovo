$(function() {


    // $('.course-slider__track-wrapper').slimScroll();
    $(".course-slider__track-wrapper").mCustomScrollbar({
        axis:"x",
        theme:"rounded-dark",
        advanced:{autoExpandHorizontalScroll:true}
    });

    $(document).on('click', '.course-slider__track-wrapper img', function() {
        _this = $(this);
        if (_this.attr('src-big').length==0) {
            return
        }
        var cont = '.course-slider__image';
        $(cont).animate({"opacity":0.2},200,function(){
            $(cont + ' img').attr('src', _this.attr('src-big'));    
            $(cont).animate({"opacity":1},500);
        })
        
        return;
    });


    $(".b-news__list").mCustomScrollbar({
        keyboard:{scrollType:"stepped"},
        mouseWheel:{scrollAmount:188},
        theme:"rounded-dark",
        autoExpandScrollbar:true,
        //snapAmount:188,
        //snapOffset:65
    });

    $(".b-action__list").mCustomScrollbar({
        keyboard:{scrollType:"stepped"},
        mouseWheel:{scrollAmount:188},
        theme:"rounded-dark",
        autoExpandScrollbar:true,
        //snapAmount:188,
        //snapOffset:65
    });

   


    $("#content-6-").mCustomScrollbar({
        scrollButtons:{enable:true,scrollType:"stepped"},
        keyboard:{scrollType:"stepped"},
        mouseWheel:{scrollAmount:188},
        theme:"rounded-dark",
        autoExpandScrollbar:true,
        snapAmount:188,
        snapOffset:65,
        axis:"x",
    });

//rounded-dark
//dark-thick
    $("#content-6").mCustomScrollbar({
        axis:"x",
        theme:"rounded-dark",
        advanced:{autoExpandHorizontalScroll:true}
    });

    $('.main-gallery__slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,

    });

    var review_list = $('.main-review__list');
    review_list.not('.slick-initialized').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false

    });


    setIndexSlide = function(obj) {
        $('.slick-slide', obj).attr('slick-ind','');
        $('.slick-active', obj).each(function(i){
                $(this).attr('slick-ind',i);
        })    
    }

    setPrevIndexSlide = function(obj, ind) {

        $('.slick-slide', obj).attr('slick-ind','');
        cnt_active = $('.slick-active', obj).length;
        j = 0;    
        for (i=ind; i<(ind+cnt_active); i++) {
           $('[data-slick-index="'+i+'"]',obj).attr('slick-ind',j);
           j++;
        }
    }

    setIndexSlide(review_list);
    

    review_list.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      review_list.animate({"opacity":0.2}, 100);
      setPrevIndexSlide(review_list, nextSlide);
    });

    review_list.on('edge', function(event, slick, currentSlide, nextSlide){
      
    });

    review_list.on('afterChange', function(event, slick, currentSlide, nextSlide){
      //setIndexSlide(review_list);
      review_list.animate({"opacity":1}, 100);
    });




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
