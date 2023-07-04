$(function(){
    $.ajax({
        
        url : "./json/TODAY.json",
        dataType: "json",
        success : function(data){
            if(data.length > 0){
            for(var i in data){
                $(".main_img5").eq(i).find("img").attr("src","img/TODAY/" + data[i].url);
            }
        }
        }
    });
});