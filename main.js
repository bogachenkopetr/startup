
$(document).ready(function(){
    $('.burger_menu').click(function(){
        $('.menu_topnav').show();
        $('.burger_close').show();
    });
     $('.burger_close').click(function(){
         $('.menu_topnav').hide();
        $('.burger_close').hide();
     });
});