
$(document).ready(function(){
    $('.burger_menu').click(function(){
        $('.menu_topnav').show();
        $('.burger_close').show();
    });
     $('.burger_close').click(function(){
         $('.menu_topnav').hide();
        $('.burger_close').hide();
     });
    const slides = $('.clients_reviews li');
    const radioButtons = $('.clients_reviews_switch button');
    radioButtons.map(function(index, button){
        $(button).click(function(){
            radioButtons.removeClass('active');
            $(button).addClass('active');
            slides.hide();
            $(slides[index]).show();
        })
    })
    
});
