$(function(){
    $.ajax({
        url : "./json/MD.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                
                for(var i in data){

                    $(".main_img4").eq(i).find("h4").children().text(data[i].title); 
                    $(".main_img4").eq(i).find("p").text(data[i].price);
                    $(".main_img4").eq(i).find("span").text(data[i].sale);
                    $(".main_img4").eq(i).find("img").attr("src", "img/MD/"+data[i].url)
                }
            }
        }
    })
});