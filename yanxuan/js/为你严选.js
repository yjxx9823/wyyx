$(".box").load("../html/公共头.html")
$("#fooo").load("../html/公共底部.html")
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
  
  });
  swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
  }
  swiper.el.onmouseout = function () {
    swiper.autoplay.start();
  }

  $.get("../js/为你严选.json",function(str){
      var co ="";
      for(var x=0;x<str.tao.length;x++){
          co+=`
          <a class="w_pic">
          <div class="pickbd">
              <img src="${str.tao[x].img1}" alt="">
          </div>
          <div class="pickhd">
              <div class="pick_info">
                  <div class="avatar">
                      <img src="../img/${str.tao[x].img2}" class="at">
                  </div>
                  <div class="nickname">${str.tao[x].txt1}</div>
              </div>
              <div class="pickim">${str.tao[x].txt2}</div>
              <p class="pick_text">${str.tao[x].txt3}</p>
          </div>
      </a>
          `
      }
      $(".pickre").html(co)

      var om ="";
      for(var y=0;y<str.cnp.length;y++){
            om+=`
            <a class="parseitem">
            <div class="lt">
                <img src="${str.cnp[y].img1}" alt="">
            </div>
            <div class="rt">
                <h4 class="cn">${str.cnp[y].td1}</h4>
                <div class="fex">${str.cnp[y].td2}</div>
            </div>
        </a>
            `
      }
      $(".passi").html(om)

      function text(aaa){
        var xhtm="";
        xhtm=`
            <div class="json_txt">
                <div class="json_lt"></div>
                <div class="json_rt">${aaa.txt}</div>
            </div>
            <div class="json_img">
                <img src=${aaa.img} />
                <div class="json_bj"></div>
                <button>去看看></button>
            </div>
        `
        if(aaa.txt2!=""){
            xhtm+=`
                <div class="json_txt2">${aaa.txt2}</div>
            `
        }
        $(".top5_json").html(xhtm)
   }
   text(str.list3[0])
   $(".tit_t").click(function(){
       text(str.list3[$(this).index()])
       $(".tit_t").removeClass("on")
       $(this).addClass("on")
   })
   var xhtml="";
   function yyy(x){
    xhtml=`
        <video autoplay controls preload="auto" src=${str.list4[x]}></video>
    `
     $(".bd6_lt").html(xhtml)
   }
   yyy(0) 
      
      var xhtml="";
      function yyy(x){
       xhtml=`
           <video autoplay controls preload="auto" src=${str.list4[x]}></video>
       `
        $(".bd6_lt").html(xhtml)
      }
      yyy(0)
      var xxx="";
      for(var n=0;n<str.list5.length;n++){
          xxx+=`
           <li>
               <img src=${str.list5[n]} />
               <em></em>
           </li>
          `
      }
      $(".db6_ul").html(xxx)
      for(let i=0;i<$(".db6_ul li").length;i++){
           $(".db6_ul li").eq(i).click(function(){
               console.log(i)
           yyy(i)
           })
      }
      $(".xia span").click(function(){
       $(".db6_ul").animate({
           top:-230
       },()=>{
           $(".db6_ul").children().first().appendTo($(".db6_ul"))        
           $(".db6_ul").css("top",-50)
       })
      
      })
      $(".shang span").click(function(){
       $(".db6_ul").children().last().prependTo($(".db6_ul"))
       $(".db6_ul").css("top",-130)
       $(".db6_ul").animate({
           top:-50
       })
      })
  })