$(function(){
    $.ajax({

        url : "./json/NEW.json",
        dateType : "json",
        success : function(data){
            if(data.length > 0){

                for(var i in data){
                    $(".main_img3").eq(i).find("img").attr("src","img/NEW/"+data[i].url);
                    $(".main_img3").eq(i).find("h4").children().text(data[i].title);
                    $(".main_img3").eq(i).find("p").children().text(data[i].subtitle);
                    $(".main_img3").eq(i).find("span:nth-last-of-type(2)").text(data[i].price);
                    $(".main_img3").eq(i).find("span:nth-last-of-type(1)").text(data[i].price);
                }
            }
        }
    })
});