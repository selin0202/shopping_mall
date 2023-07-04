$(function(){
    $.ajax({
        url : "./json/Event.json",
        dataType : "json",
        success : function(data){
            
            if(data.length > 0){
            for (var i in data){
                $(".contents_img").eq(i).find("img").attr("src","img/Event/" + data[i].url);
                $(".contents_img").eq(i).find("h6").text(data[i].title);
                $(".contents_img").eq(i).find("p").text(data[i].subtitle);
            }
            }
        }
    })
});