$("#box").load("../html/公共头.html")
$("#foter").load("../html/公共底部.html")
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
// swiper.el.onmouseover = function () {
//   swiper.autoplay.stop();
// }
// swiper.el.onmouseout = function () {
//   swiper.autoplay.start();
// }

$.get("../js/首页.json", function (str) {

  var zk = "";
  for (var x = 0; x < str.mask.length; x++) {
    zk += `
        <a class=${str.mask[x].class}>
          <div class="data">
             <span class="reactid1">${str.mask[x].tit1}</span>
             <span class=${str.mask[x].class1}>${str.mask[x].tit2}</span>
          </div>
          <div class="pri">${str.mask[x].many}</div>
              <div class="rectd">
                <img src="${str.mask[x].img}" alt="">
              </div>
        </a>
    `
  }
  $(".bd").html(zk)
  var xy = ""
  for (var y = 0; y < str.last.length; y++) {
    var kong1 = ""
    var kong2 = ""
    var kong3 = ""
    if (str.last[y].txte1) {
      kong1 = kong1 + `<span class="m_tags"}>${str.last[y].txte1}</span>`;
    }
    if (str.last[y].txte5) {
      kong2 = kong2 + `<span>${str.last[y].txte5}</span>`;
    }
    if (str.last[y].txte6) {
      kong3 = kong3 + `<span>${str.last[y].txte6}</span>`;
    }
    xy = `
       <div class="sm">
       <div class="datd_recticd">
           <img src="${str.last[y].img1}" class="img">
       </div>
       <div class="datd_recticd">
           <img src="${str.last[y].img2}" class="imgsence">
       </div>
       <img src="${str.last[y].img3}" class="promologo">
       <div class="probanner" style=${str.last[y].style}>
           <div class="proTitle" style=${str.last[y].style2}>
               <div class="tltle">
                   <span>${str.last[y].span1}</span>
               </div>
               <div class="subTitle">
                   <span>${str.last[y].span2}</span>
               </div>
           </div>
           <div class="procintent">${str.last[y].span3}</div>
       </div>
   </div>
   <div class="xm">
       <div class="prdtags">
           ` + kong1 + `
       </div>
       <h4 class="name">
           <span>${str.last[y].txte2}</span>
       </h4>
       <p class="price">
           <span class="retaiprice">
               <span>${str.last[y].txte3}</span>
               <span>${str.last[y].txte4}</span>
           </span>
           <span class="couterprice">
               ` + kong2 + `
               ` + kong3 + `
               
           </span>
       </p>
   </div>
       `
    $(".item_list li").eq(y).html(xy)
  }
  $(".a2").click(function () {
    fn("tuijian2");
    $(this).addClass("active")
    $(".a1").removeClass("active")
  })
  $(".a1").click(function () {
    fn("tuijian");
    $(this).addClass("active")
    $(".a2").removeClass("active")
  })
  var ma = ""

  function fn(lo) {

    for (var z = 0; z < str[lo].length; z++) {
      var kong2 = ""
      var kong3 = ""
      var kong4 = ""
      var kong5 = ""
      var kong6 = ""
      var kong7 = ""
      var kong8 = ""
      var kong9 = ""
      if (str[lo][z].txte5) {
        kong2 = kong2 + `<span>${str[lo][z].txte5}</span>`;
      }
      if (str[lo][z].txte6) {
        kong3 = kong3 + `<span>${str[lo][z].txte6}</span>`;
      }
      if (str[lo][z].span1) {
        kong4 = kong4 + `<span>${str[lo][z].span1}</span>`
      }
      if (str[lo][z].span2) {
        kong5 = kong5 + `<span>${str[lo][z].span2}</span>`
      }
      if (str[lo][z].span3) {
        kong6 = kong6 + `<div class="procintent">${str[lo][z].span3}</div>`
      }
      if (str[lo][z].style) {
        kong7 = kong7 + `style=${str[lo][z].style}`
      }
      if (str[lo][z].style2) {
        kong8 = kong8 + `style=${str[lo][z].style2}`
      }
      if (str[lo][z].txte1) {
        kong9 = kong9 + `<span class="m_tags">${str[lo][z].txte1}</span>`
      }
      if (str[lo][z].max) {
        ma = `
        <div class="to">
                          <a>
                              <div class="m_im">
                                  <img src="${str[lo][z].img1}" alt="">
                              </div>
                              <img src="${str[lo][z].img2}" class="promologo">
                              <div class="probanner" style=${str[lo][z].style}>
                                  <div class="proTitle" style=${str[lo][z].style2}>
                                      <div class="tltle">
                                          
                                      </div>
                                      <div class="subTitle">
                                          <span>${str[lo][z].span2}</span>
                                      </div>
                                  </div>
                                  <div class="procintent">${str[lo][z].span3}</div>
                              </div>
                          </a>
                      </div>
                      <div class="bo">
                          <div class="prdtags">
                              <span class="m_tags">${str[lo][z].txte1}</span>
                          </div>
                          <h4 class="name">
                              <span>${str[lo][z].txte2}</span>
                          </h4>
                          <p class="price">
                              <span class="retaiprice">
                                  <span>${str[lo][z].txte3}</span>
                                  <span>${str[lo][z].txte4}</span>
                              </span>
                              <span class="couterprice">
                                   <span>${str[lo][z].txte5}</span>
                                   <span>${str[lo][z].txte6}</span>
                              </span>
                          </p>
                      </div>
        `
        $(".m_big").eq(z).html(ma)
      } else {
        ma = `
        <div class="s">
        <a>
            <div class="bx">
                <img src="${str[lo][z].img1}" alt="">
            </div>
            <img src="${str[lo][z].img2}" class="promologo">
            <div class="probanner" ` + kong7 + `>
                <div class="proTitle" ` + kong8 + `>
                    <div class="tltle">
                       ` + kong4 + ` 
                    </div>
                    <div class="subTitle">
                    ` + kong5 + ` 
                    </div>
                </div>
                ` + kong6 + ` 
            </div>
        </a>
     </div>
     <div class="x">
        <div class="prdtags">
            ` + kong9 + `
        </div>
        <h4 class="name">
            <span>${str[lo][z].txte2}</span>
        </h4>
        <p class="price">
            <span class="retaiprice">
                <span>${str[lo][z].txte3}</span>
                <span>${str[lo][z].txte4}</span>
            </span>
            <span class="couterprice">
            ` + kong2 + `
            ` + kong3 + `
            </span>
        </p>
     </div>
        `
        console.log(ma)
        $(".m_small").eq(z - 1).html(ma)

      }

    }
  }
  fn("tuijian")

  var opop = ""
  for (var q = 0; q < str.tejia.length; q++) {
    opop += `
    <div class="itop">
        <div class="pic">
            <img src="${str.tejia[q].img1}" alt="">
        </div>
        <div class="jieshao">
            <div class="shuijiao">${str.tejia[q].text1}</div>
            <div class="limiplice">
                <span class="z1">${str.tejia[q].text2}</span>
                <span class="z2">${str.tejia[q].text3}</span>
                <span class="z3">${str.tejia[q].text4}</span>
            </div>
            <div class="coturprice">
                <span class="num">
                    <span>${str.tejia[q].text5}</span>
                    <span>${str.tejia[q].text6}</span>
                </span>
            </div>
            <div class="w_button">${str.tejia[q].text7} </div>
        </div>
    </div>

    `

  }

  $(".x_xia").html(opop)

  var hezi1 = ""
  for (var w = 0; w < str.lpm.length; w++) {
    hezi1 += `
    <div class="item2">
    <div class="li1">
        <img src="${str.lpm[w].img}" alt="">
    </div>
    <div class="li2">
        <div class="meik1">
        ${str.lpm[w].tit1}
        </div>
        <div class="meik2">
            <span class="limi">
                <span>${str.lpm[w].tit2}</span>
                <span>${str.lpm[w].tit3}</span>
            </span>
            <span class="limi2">
                <span>${str.lpm[w].tit4}</span>
                <span>${str.lpm[w].tit5}</span>
            </span>
        </div>
        <a class="meik3">
            <i></i>
        </a>
    </div>
</div>
    `
  }
  $(".conterl").html(hezi1)

  var hezi2 = ""
  for (var c = 0; c < str.lpm2.length; c++) {
    hezi2 += `
    <div class="item2">
    <div class="li1">
        <img src="${str.lpm2[c].img}" alt="">
    </div>
    <div class="li2">
        <div class="meik1">
        ${str.lpm2[c].tit1}
        </div>
        <div class="meik2">
            <span class="limi">
                <span>${str.lpm2[c].tit2}</span>
                <span>${str.lpm2[c].tit3}</span>
            </span>
            <span class="limi2">
                <span>${str.lpm2[c].tit4}</span>
                <span>${str.lpm2[c].tit5}</span>
            </span>
        </div>
        <a class="meik3">
            <i></i>
        </a>
    </div>
</div>
    `
  }
  $(".conterp").html(hezi2)

  var nk = "";
  var hm="";
  for (var a = 0; a < str.biaoti.length; a++) {
    nk += `
    <div class="k_bnner">
    <div class="k_center">
        <div class="k_title">
            <div class="k_left">
                <h3>${str.biaoti[a].timu.ti1}</h3>
            </div>
            <div class="k_right">
                <span class="subn">
                    <a>${str.biaoti[a].timu.ti2}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti3}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti4}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti5}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti6}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti7}</a>
                </span>
                <span class="subn">
                    <b>/</b>
                    <a>${str.biaoti[a].timu.ti8}</a>
                </span>
                <a class="ckgd">查看更多 ></a>
            </div>
            
        </div>
        <div class="k_lunbo">
                <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style="background-image:url(${str.biaoti[a].lun.ig1})">
                            </div>
                            <div class="swiper-slide" style="background-image:url(${str.biaoti[a].lun.ig2})">
                            </div>
                            <div class="swiper-slide" style="background-image:url(${str.biaoti[a].lun.ig3})">
                            </div>
                            <div class="swiper-slide" style="background-image:url(${str.biaoti[a].lun.ig4})">
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next swiper-button-white next" style="top: 130px; right: 10px;"></div>
                        <div class="swiper-button-prev swiper-button-white prev" style="top: 130px; left: 10px;"></div>
                    </div>
                    <script>
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
                    </script>
        </div>
        <div class="k_tupian">
            <ul class="ul1">
`
    for(var b=0;b<str.biaoti[a].cen.length;b++){
        hm+=`
        <li>
        <div class="m_protus">
            <div class="hh">
                <div class="imgg">
                    <img src="${str.biaoti[a].cen[b].pian1}" alt="">
                </div>
                <div class="imgg2">
                    <img src="${str.biaoti[a].cen[b].pian2}" class="mg">
                </div>
                <img src="${str.biaoti[a].cen[b].pian3}" class="imgg3">
                <div class="pom" style="background-image: url(${str.biaoti[a].cen[b].sy1});">
                    <div class="pomtou" style="background-image: url(${str.biaoti[a].cen[b].sy2});">
                        <div class="qiang">
                            <span>${str.biaoti[a].cen[b].ne1}</span>
                        </div>
                        <div class="mny">
                            <span>${str.biaoti[a].cen[b].ne2}</span>
                        </div>
                    </div>
                    <div class="gang">${str.biaoti[a].cen[b].ne3}</div>
                </div>
            </div>
            <div class="dd">
                <div class="protags">${str.biaoti[a].cen[b].ne4}</div>
                <h4 class="plo">
                    <span>${str.biaoti[a].cen[b].ne5}</span>
                </h4>
                <p class="jiage">
                    <span class="hong">
                        <span>${str.biaoti[a].cen[b].ne6}</span>
                        <span>${str.biaoti[a].cen[b].ne7}</span>
                    </span>
                </p>
            </div>
        </div>
        </li> 
        `
    }
    nk+=hm+"</ul></div></div></div>";
    hm=""
  }
  $(".bigbox").html(nk)
})
var index = 0;
$(".click_index_re").click(function () {
  index++;
  if (index == 3) {
    index = 2
    $("click_index_re").css("background-color", "#E7E2D7")
  }
  $(".item_list").animate({
    "left": "-1100" * index
  })
  $("click_index_re").css("background-color", "#E7E2D7")

})
$(".click_index_le").click(function () {
  index--;
  if (index == -1) {
    index = 0
    $("click_index_re").css("background-color", "#E2C199")
  }
  $(".item_list").animate({
    "left": "-1100" * index
  })

})

