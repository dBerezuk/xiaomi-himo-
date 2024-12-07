$(document).ready(function(){
    $('.bike-slider,.slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.menu__link,.bike__link').on('click',function(e){
       e.preventDefault();
       var id = $(this).attr('href');
       var top = $(id).offset().top;
       $('body,html').animate({scrollTop: top},900);
    });
});