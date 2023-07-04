$(function(){

    $.ajax({
        url : "./json/Best.json",
        dataType : "json",
        success : function(data){
            
            if(data.length > 0){
                for(var i in data){
                    $(".main_img1").eq(i).find("img").attr("src", "img/Best/" + data[i].url);
                    $(".text_hover").eq(i).find("h4").text(data[i].title);
                    $(".text_hover").eq(i).find("p").text(data[i].subtitle);
                    $(".text_hover").eq(i).find("span:nth-last-of-type(2)").text(data[i].price);
                    $(".text_hover").eq(i).find("span:nth-last-of-type(1)").text(data[i].price);
                }
            }
        }
    })
});