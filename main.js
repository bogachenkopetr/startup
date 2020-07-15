
$(document).ready(function(){
    $('.burger_menu').click(function(){
        $('.menu_topnav').show();
        $('.burger_close').show();
    });
     $('.burger_close').click(function(){
         $('.menu_topnav').hide();
        $('.burger_close').hide();
     });
    
    /*reviews slider*/
    const slides = $('.clients_reviews li');
    const radioButtons = $('.clients_reviews_switch button');
    radioButtons.map(function(index, button){
        $(button).click(function(){
            radioButtons.removeClass('active');
            $(button).addClass('active');
            slides.hide();
            $(slides[index]).show();
        })
    });
    
    $(".owl-carousel").owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        navClass: ["button_left", "button_right"],
        responsive:{
            0:{
                items: 2,
                nav: true
            },
            768: {
              items: 3,
              nav: true
            },
            992: {
              items: 4,
              nav: true
            }
        }
    });
});






