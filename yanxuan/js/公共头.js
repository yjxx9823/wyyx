var timer=setInterval(function(){
   $(".search_x ul").animate({"top":-36},1000,function(){
      $(".search_x li").first().appendTo($(".search_x ul"))
      $(".search_x ul").css("top",0)
   })
},5000)
$(".search_x ul").mouseover(function(){
   clearInterval(timer)
}) 
$(".search_x ul").mouseout(function(){
   var timer=setInterval(function(){
      $(".search_x ul").animate({"top":-36},1000,function(){
         $(".search_x li").first().appendTo($(".search_x ul"))
         $(".search_x ul").css("top",0)
      })
   },5000)
})

$.get("../js/公共头.json", function (str) {
   for(var y=0;y<str.length;y++){
       var ht = "";
       for (var i = 0; i < str[y].length; i++) {
           ht += `
           <div class="li">
               <img src=${str[y][i].img}>
               <span>${str[y][i].text}</span>
           </div>      
                `
       }
       $(".shuju").eq(y).html(ht);
       // ht = "";
   }
})
