$(function(){
    $(".menu li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(".submenu").stop().slideUp();
    });
});