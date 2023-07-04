
$(function(){
    $(".prev").click(function(){
        $(".slide li:last").prependTo(".slide");
        $(".slide").css({marginLeft:-1900});
        $(".slide").stop().animate({marginLeft:0},1000);
    });
    
    
    $('.next').click(function(){
        $('.slide').stop().animate({marginLeft:-1900},1000,function(){
            $(".slide li:first").appendTo(".slide");
            $(".slide").css({marginLeft:0});
        });
    });
    });

function slide(){
    $('.slide').stop().animate({marginLeft:-1900},1000,function(){
        $('.slide li:first').appendTo(".slide");
        $('.slide').css({marginLeft:0});
    });
};

setInterval(slide,4000)

