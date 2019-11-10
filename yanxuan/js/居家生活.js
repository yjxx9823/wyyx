$(".box").load("../html/公共头.html")
$(".fot").load("../html/公共底部.html")
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

  $.get("../js/居家生活.json",function(str){
      var biaoti =""
      var htm="";
      htm=`
      <div class="m_ortBar">
          <span class="name">分类：</span>
          <div class="group">
          </div>
      </div>
      <div class="m_content">
      <span class="name2">配送地区：</span>
      <div class="cate">
          <a>全部</a>
          <a>香港</a>
          <a>澳门</a>
          <a>台湾</a>
          <a>日韩</a>
          <a>欧洲</a>
          <a>美洲</a>   
      </div>
   </div>
   <div class="m_rea">
       <div class="name3">排序：</div>
       <a>默认</a>
       <a class="sort">
       <span>价格</span>
       <div class="icon">
        <i class="icons"></i>
        <i class="iconx"></i>
       </div>
       </a>
       <a class="sort">
        <span>上架时间</span>
        <i class="iconm"></i>
       </a>
   </div>
      `
      
      $(".m_top").html(htm)
      for(var x=0;x<str[0].title.length;x++){
          biaoti+=`
          <a>${str[0].title[x]}</a>
          `
      }
      $(".group").html(biaoti)


      var vs ="";
      for(var a=0;a<str[0].ce.length;a++){
        console.log(str[0].ce[a].ce_s.tr1)
        vs +=`
        <div class="x_hz">
        <div class="head">
            <p class="title">
                <span>${str[0].ce[a].ce_s.tr1}</span>
            </p>
            <p class="desc">${str[0].ce[a].ce_s.tr2}</p>
        </div>
        <ul class="cente">

      
        `
        var vd ="";
        for(var b=0;b<str[0].ce[a].ce_x.length;b++){
          console.log(str[0].ce[a].ce_x[b].im1)
          vd +=`
          <li>
          <div class="m_proude">
              <div class="hd">
                  <img src="${str[0].ce[a].ce_x[b].im1}" class="img">
                  <div class="img2">
                      <img src="${str[0].ce[a].ce_x[b].im2}" alt="">
                  </div>
                  <img src="${str[0].ce[a].ce_x[b].im3}" class="img3">
                  <div class="proBanner" style="${str[0].ce[a].ce_x[b].sy1}">
                      <div class="proTitle" style="${str[0].ce[a].ce_x[b].sy2};">
                          <div class="tle">
                              <span>${str[0].ce[a].ce_x[b].sp1}</span>
                          </div>
                          <div class="subtle">
                              <span>${str[0].ce[a].ce_x[b].sp2}</span>
                          </div>
                      </div>
                      <div class="prom">${str[0].ce[a].ce_x[b].sp3}</div>
                  </div>
              </div>
              <div class="bd">
                  <div class="prd_tag">
                      ${str[0].ce[a].ce_x[b].sp4}
                  </div>
                  <div class="me">
                      <span>${str[0].ce[a].ce_x[b].sp5}</span>
                  </div>
                  <p class="price">
                      <span class="hone">
                          <span>${str[0].ce[a].ce_x[b].sp6}</span>
                          <span>${str[0].ce[a].ce_x[b].sp7}</span>
                      </span>
                      <span class="hei">
                          <span>${str[0].ce[a].ce_x[b].sp8}</span>
                          <span>${str[0].ce[a].ce_x[b].sp9}</span>
                      </span>
                  </p>
                  <div class="reac">
                      <hr>
                      <p>${str[0].ce[a].ce_x[b].sp10}</p>
                  </div>
              </div>
          </div>
       </li> 
          `
        }
        vs+=vd+"</ul></div>"
      }
      $(".m_bottom").html(vs)
  })