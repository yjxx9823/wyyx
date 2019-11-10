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

$.get("../js/众筹.json", function (str) {
  var hh = ""
  for (var x = 0; x < str.shang.length; x++) {
    hh += `
      <li class="${str.shang[x].class}">
      <div class="m_focus">
          <div class="u_pic">
              <img src="${str.shang[x].img1}" alt="">
          </div>
          <div class="m_info">
              <p class="u_name">${str.shang[x].test1}</p>
              <p class="u_desc">${str.shang[x].test2}</p>
              <div class="m_programs">
                  <div class="m_bar">
                      <div class="m_bb">
                          <div class="progress" style="${str.shang[x].test3}"></div>
                      </div>
                  </div>
              </div>
              <span class="u_pre">
                <span>${str.shang[x].test4}</span>
                <span>${str.shang[x].test5}</span>
              </span>
                  
              <ul class="u_detil">
                  <li>
                      <div class="text">
                          <span>${str.shang[x].span1}</span>
                          <span>${str.shang[x].span2}</span>
                      </div>
                      <div class="sd">${str.shang[x].span3}</div>
                  </li>
                  <li>
                    <div class="text">
                        <span>${str.shang[x].span4}</span>
                        <span>${str.shang[x].span5}</span>
                    </div>
                    <div class="sd">${str.shang[x].span6}</div>
                  </li>
                  <li>
                    <div class="text">
                    ${str.shang[x].span7}
                    </div>
                    <div class="sd">${str.shang[x].span8}</div>
                  </li>
              </ul>
          </div>
      </div>
  </li>
      `
  }
  $(".m_center").eq(0).html(hh)

  var he = ""
  for (var y= 0; y < str.xia.length; y++) {
    console.log(1)
    he += `
      <li class="${str.xia[y].class}">
      <div class="m_focus">
          <div class="u_pic">
              <img src="${str.xia[y].img1}" alt="">
          </div>
          <div class="m_info">
              <p class="u_name">${str.xia[y].test1}</p>
              <p class="u_desc">${str.xia[y].test2}</p>
              <div class="m_programs">
                  <div class="m_bar">
                      <div class="m_bb">
                          <div class="progress" style="${str.xia[y].test3}"></div>
                      </div>
                  </div>
              </div>
              <span class="u_pre">
                <span>${str.xia[y].test4}</span>
                <span>${str.xia[y].test5}</span>
              </span>
                  
              <div class="m_end">
                <div class="u_txt">${str.xia[y].span1}</div>
                   <div class="u_content">
                      <span>${str.xia[y].span2}</span>
                    <span class="acont">
                       <span>${str.xia[y].span3}</span>
                       <span>${str.xia[y].span4}</span>
                    </span>
                </div>
              </div>
          </div>
      </div>
  </li>
      `
  }
  $(".m_center").eq(1).html(he) 
})