
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
    
    /*about_us carousel*/
    const carousel = $('.about_us_photo');
    const carouselItems = $('.about_us_photo li');
    const buttonNext = $('.button_right');
    const buttonBack = $('.button_left');
    const displayCount = 1; // колличество изображений на которые сдвигается карусель
    let position = 0;// это начальная позиц элемента кар-ли ul
    
    buttonNext.click(function(){
        let width = $(carouselItems[0]).width() + parseFloat($(carouselItems[0]).css('margin-right')); // ширина картинки + margin right
        console.log(width);
        position = position - width;
        const positionMax = - width * (carouselItems.length-displayCount); 
        position = Math.max(position, positionMax);// позволяет в карусели прекратить смещение, когда закончились фото
        carousel.css('margin-left', position + 'px');
    })
    buttonBack.click(function(){
        let width = $(carouselItems[0]).width() + parseFloat($(carouselItems[0]).css('margin-right')); // ширина картинки + margin right
        console.log(width);
        position = position + width;
        position = Math.min(position, 0);// позволяет в карусели прекратить смещение, когда закончились фото
        carousel.css('margin-left', position + 'px');
    })
});






