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
        });
        
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
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                }
            }
        ]

    });

    var review_list = $('.main-review__list');
    review_list.not('.slick-initialized').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                }
            }
        ]

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




    if ($(window).width()>750){

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

    }

    setCenter = function(coord_s, zoom=11) {
        coord = coord_s.split(',');
        myMap.setCenter(coord, zoom, {
            checkZoomRange: true
        });
    }

    setMarker = function(coord_s, txt, zoom=11, center_mode=1) {
        coord = coord_s.split(', ');
        var pm  = new ymaps.Placemark(coord, {
            iconContent: "",
            balloonContent: txt
        },{
            iconLayout: 'default#image',
            iconImageHref: '/assets/template/img/marker.png',
            iconImageSize: [126, 117],
            iconImageOffset: [-60, -58]
        });



        myMap.geoObjects.add(pm);
        if (center_mode){
            setCenter(coord_s, zoom);
        }
        return false;
    }



    if ($('.map-select').length>0){
        ymaps.ready(function(){

            $('option', $('.map-select')).each(function() {
               //alert($(this).attr('data-text'));
                opt = $(this)
                coord = opt.attr('data-coord');
                txt = opt.attr('data-text');
                zoom = opt.attr('data-zoom');

                setMarker(coord, txt, zoom, opt.prop('selected'));
            });


        });
    }


    $(document).on('change', '.map-select', function() {
        opt = $('option:selected', this);
        coord = opt.attr('data-coord');
        txt = opt.attr('data-text');
        zoom = opt.attr('data-zoom');
        setCenter(coord, zoom);
        return false;

    });



    var courses_slider = $('.curses__list');

    courses_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
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

    $(".header__burger").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile-menu'
    });


    setHeightHeader = function(){
        var header_height = $('.header').height();
        $('.header-wrapper').css({'min-height':header_height});
    };

    setHeightHeader();

    setFixedHeader = function(){

        var header = $('.header');
        var header_relative = $('.header').not('.slideTop');

        if (header_relative.length>0){
            relative_bottom = header_relative.offset().top + header_relative.outerHeight();
            relative_top = header_relative.offset().top;
        }else{
            if (!relative_bottom){
                relative_bottom = 0;
            }
            if (!relative_top){
                relative_top = 0;
            }
        }
        var scroll = $(window).scrollTop();
        if (relative_bottom<scroll) {
            header.addClass('slideTop');
            setTimeout(function(){
                $('body').addClass('fixed-header');
            });
        }
        if (relative_top>=scroll) {
            $('body').removeClass('fixed-header');
            header.removeClass('slideTop');
        }
    };




    $('select.selectric').selectric({
        maxHeight: 210
    });


    $('[data-goto]').click(function(){
        $.magnificPopup.close();
        selector = $(this).attr('data-goto');
        if ($(selector).length > 0) {
            $('html, body').animate({ scrollTop: $(selector).offset().top - $('.header').outerHeight() }, 1200);
        } else {
            document.location.href = '/#data-goto='+selector;
        }

        //alert(href);
        return false;
    });

    var anc = document.location.href;
    if (anc.indexOf("#data-goto")>0) {
        selector = anc.substr(anc.indexOf("#data-goto=")).replace("#data-goto=", "");
        if ($(selector).length > 0) {
            $('html, body').animate({ scrollTop: $(selector).offset().top - $('.header').outerHeight() }, 1200);
        }
    }

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
    //moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
    //initSlider();
    //$('.main-news__list').slick('reinit');
});
$(document).scroll(function(){

    setFixedHeader();
});

$preloader = $('.loaderArea'),
$loader = $preloader.find('.loader');

startPreloader = function() {
    $loader.fadeIn();
    $preloader.delay(350).fadeIn('slow');
}
stopPreloader = function() {
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
}

$(window).on('load', function () {
    setTimeout(function(){
        //stopPreloader();
        //initAnimated();
    }, 100);

});