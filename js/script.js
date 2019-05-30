$(window).on("load",function(){

  // リロードしたらトップへ
  $('html').animate({ scrollTop: 0 }, '0.001');
  $.each($(".parts"), function (i, e) {
    $(".parts").eq(i).removeClass("on");
  })
  // リロードでスクロールアニメを見えなくする為に
  setTimeout(function(){

    // ローディング画面を消す
    $(".load").css("opacity", 0);
    setTimeout(function () {
      $(".load").css("display", "none");
    }, 500)
    // トップ画面表示
    $(".mainVisual").css("opacity", "0.7")
    // 1.5秒後、タイトルを表示
    setTimeout(function () {
      setTimeout(function () {
        $.each($(".titleSvg"), function (i, e) {
          setTimeout(function () {
            $(".titleSvg").eq(i).css("opacity", "1");
          }, 100 * i)
        })
      }, 300)
    }, 1500)

    // 5秒後、home-contentを表示
    setTimeout(function () {
      $(".titleSvg").css("opacity", "0");
      $(".content-home").addClass("on");
    }, 4500)
  },200);
})
$(function(){
  $.ajax({
    url: "read/works.php",
    method: "get",
    cache: false,
    dataType: "json",
    timeout: 10000
  })
  .done(function(data){
    const worksInfo = data;
    $.each(worksInfo,function (i) {

      console.log(i)

      let iconPc = "";
      let iconSp = "";
      if (worksInfo[i]['device'] == 2 ){
        iconPc = "on";
        iconSp = "on";
      }
      if (worksInfo[i]['device'] == 0  ){
        iconPc = "on";
      }
      if (worksInfo[i]['device'] == 1) {
        iconSp = "on";
      }
        
      let item = `
      <li class="work-box flex">
        <div class="work-main">
          <div class="work-main__head flex">
            <div class="work-title flex">
              <h3>${ worksInfo[i]['workname'] }</h3>
            </div>
            <ul class="work-device flex">
              <li><i class="fas fa-desktop ${ iconPc }"></i></li>
              <li><i class="fas fa-mobile-alt ${ iconSp }"></i></li>
            </ul>
          </div>
          <figure class="work-main__img"><a href="${ worksInfo[i]['url']}" target="_blank"><img data-src="img/thumb-${worksInfo[i]['link']}.png" alt="${worksInfo[i]['workname'] }のサムネイル" class="lazyload" src=""></a></figure>
          <h4 class="work-main__title">${ worksInfo[i]['title'] }</h4>
          <p class="work-main__text">${ worksInfo[i]['worktext'] }</p>
        </div>
        <div class="work-bottom">
          <ul class="work-bottom__used">
            <li class="used-soft flex">
              <h4>使用技術：</h4>
              <ul class="used-soft__list flex"></ul>
            </li>
            <li class="used-lang">
              <h4>担当部分：${ worksInfo[i]['part'] }</h4>
            </li>
          </ul>
          <ul class="work-bottom__btn flex">
            <li><a href="${ worksInfo[i]['url']}" target="_blank">サイトを見る</a></li>
          </ul>
          <ul class="work-bottom__hash flex">
            <li>#&nbsp;${worksInfo[i]['season']}</li>
            <li>#&nbsp;${worksInfo[i]['worktype']}</li>
          </ul>
        </div>
      </li>`
      $(".worksList").append(item);

      // 最新作品
      if (worksInfo[i]['new'] == 1 ){
        let newWork = `<p class="work-new">NEW!!</p>`;
        $(".work-box").eq(i).append(newWork);
      }
      // 企画書の有無
      if (worksInfo[i]['proposal'] == "block") {
        let hash_proposal = `<li>#&nbsp;企画</li>`
        $(".work-bottom__hash").eq(i).append(hash_proposal);
        console.log("企画書"+i)
        let btn_proposal = `<li><a href="pdf/${worksInfo[i]['link']}.pdf" target="_blank">企画書を見る</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_proposal);
      }
      // Githubの有無
      if (!worksInfo[i]['git'] == "") {
        let hash_git = `<li>#&nbsp;GitHub</li>`
        $(".work-bottom__hash").eq(i).append(hash_git);
        let btn_git = `<li><a href="${worksInfo[i]['git']}" target="_blank"><i class="fab fa-gitHub"></i>GitHubへ</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_git);
      }
      // スキル一覧
      let skills = worksInfo[i]['skill'].split("/");
      $.each(skills,function(k,e){
        $(".worksList > li").eq(i).find(".used-soft ul").append(`<li><img data-src='img/skill-${skills[k]}.svg' alt='${skills[k] }のアイコン' class="lazyload" src=""></li>`);
      });
    })
    // タイプスクエアリロード
    Ts.setAutoLoadFontSelector(".worksList", 100);

    // 余白分のworklist追加
    addEmpty();

    // ６個目以降を消す
    for (let i = 6; i <= $(".worksList > li").length; i++) {
      $(".worksList > li").eq(i).addClass("none");
    }

    // ウィンドウの幅によって、WORKSの余りの空箱を追加
    function addEmpty() {
      $(".no").remove();
      const winWid = $(window).width();
      if (winWid >= 1) {
        if (!Number(worksInfo.length % 3) == 0){
          let addCount = 3 - worksInfo.length % 3;
          for (i = 1; i <= addCount; i++) {
            $(".worksList").append("<li class='work-box no'></li>");
          }
          if($(".worksList").hasClass("rimit")){
            $(".worksList .no").addClass("none");
          }
        }
      }
      if (winWid >= 680 && winWid < 1100) {  
        if (!Number(worksInfo.length % 2) == 0){
          let addCount = 2 - worksInfo.length % 2;
          for (i = 1; i <= addCount; i++) {
            $(".worksList").append("<li class='no'></li>");
          }
        }
      }
    }

    $(window).on("resize", function () {
      addEmpty();
    });
  })
  .fail(function (error) {
    console.log(error);
  })
})
$(function(){
  let beforeSc = $(document).scrollTop();
  let scFlg = true;
  let flgProfile = true;
  
  $(document).on("scroll",function(){
    let scTop = $(document).scrollTop();
    let afterSc = $(document).scrollTop();

    if ( afterSc > 0 ){
      if (beforeSc < afterSc ) {

        if (scFlg) {
          if ($(document).scrollTop() < $(window).height()) {
            // naviListがクリックされてなかったらWORKSヘ
            if (!$(".naviList").hasClass("click")) {
              $("html, body").animate({ scrollTop: $(".content-works").offset().top }, "swing");
            }
          }
          scFlg = false;
          setTimeout(function () {
            scFlg = true;
          }, 1000)
        }
      }
    }
    beforeSc = afterSc;
    
    // works表示アニメーション
    $.each($(".worksList > li"), function (i, e) {
      if ($(this).offset().top - scTop < $(window).height() / 4 * 3) {
        if (!$(this).hasClass("none")) {
          if (!$(this).hasClass("no")) {
            $(this).addClass("on");
          }
        }
      }
      else {
        $(this).removeClass("on");
      }
    })

    // profile表示アニメーション
    if ($(".content-profile").offset().top - scTop < $(window).height() / 2) {
      if (flgProfile) {
        $.each($(".parts"), function (i, e) {
          setTimeout(function () {
            $(".parts").eq(i).addClass("on");
          }, 80 * i)
        })
        flgProfile = false;
      }
    }
    else {
      $.each($(".parts"), function (i, e) {
        setTimeout(function () {
          $(".parts").eq(i).removeClass("on");
        }, 40 * i)
      })
      flgProfile = true;
    }

    // history表示アニメーション
    $.each($(".content-history li"), function (i, e) {
      if ($(this).offset().top - scTop < $(window).height() / 4 * 3) {
        $(this).children("p").addClass("on");
        $(this).find("h3").addClass("on");
      }
      else {
        $(this).children("p").removeClass("on");
        $(this).find("h3").removeClass("on");
      }
    })
    $.each($(".content-history li > div p"), function (i, e) {
      if ($(this).offset().top - scTop < $(window).height() / 4 * 3) {
        $(this).addClass("on");
      }
      else {
        $(this).removeClass("on");
      }
    })

    // contact表示アニメーション
    if ($(".content-contact").offset().top - scTop < $(window).height() / 2) {
      $(".content-contact > div").addClass("on");
    }
    else {
      $(".content-contact > div").removeClass("on");
    }
  })
})
$(function(){
  const worksList = $(".worksList");
  const content = $(".content");
  const sideNavi = $(".sideNavi");
  const naviList = $(".naviList");
  // 作品 ViewMoreボタン
  $(document).on('click', '.btn-more', function () {
    if( worksList.hasClass("rimit") ){
      $(".worksList > li").removeClass("none");
      $(".btn-more").html("Close")
      worksList.removeClass("rimit")
      setTimeout(function(){
        $(".worksList > li").addClass("on");
      },200)
    }
    else{
      $(document).scrollTop($(".content-works").offset().top)
      setTimeout(function(){
        $(".btn-more").html("View&nbsp;More");
        worksList.addClass("rimit")
        for (let i = 6; i <= $(".worksList > li").length; i++) {
          $(".worksList > li").eq(i).addClass("none");
        }
      },1000)
    }        
  });

  // ↓WORKSボタン
  $(".scroll-works").on("click",function(){
    $("html, body").animate({ scrollTop: $(".content-works").offset().top }, "swing");
  })

  // ハンバーガーメニュー
  $(".btn-humb").on("click", function () {
    $(this).removeClass("offAnime");
    $(this).removeClass("onAnime");
    if ($(this).hasClass("on")) {
      $(this).addClass("offAnime");
      sideNavi.css({ opacity: 0, zIndex: -1 })
      setTimeout(function () {
        $(".btn-humb").removeClass("on");
      }, 1900)
    }
    else {
      $(this).addClass("onAnime");
      sideNavi.css({ opacity: 1, zIndex: 1 })
      setTimeout(function () {
        $(".btn-humb").addClass("on");
      }, 1900)
    }
  })

  // スマホサイズかどうかを測定
  if ($(window).width() <= 960) {
    // SP
    $(".sideNavi li p").addClass("on");
    sideNavi.addClass("sp");
  }

  // 画面サイズ変わるたびに変更
  $(window).on("resize", function () {
    sideNavi.removeClass("sp");
    if ($(window).width() <= 960) {
      sideNavi.css({ opacity: 0, zIndex: -1 })
      $(".sideNavi li p").addClass("on");
      sideNavi.addClass("sp");
    }
    else {
      sideNavi.css({ opacity: 1, zIndex: 1 })
      $(".sideNavi li p").removeClass("on");
      naviList.each(function () {
        if ($(this).hasClass("show")) {
          $(this).children("p").addClass("on");
        }
      })
    }
  });

  // ホバーイベント
  naviList.on("mouseover", function () {
    $(this).children("p").addClass("on");
    $(this).addClass("on");
    $(this).addClass("mouseon");
  })
  naviList.on("mouseout", function () {
    if (!$(this).hasClass("show")) {
      $(this).removeClass("on");
      if (!sideNavi.hasClass("sp")) {
        $(this).children("p").removeClass("on");
      }
    }
    $(this).removeClass("mouseon");
  })

  // サイドナビをクリックした時
  let sideNaviIndex = 0;
  naviList.each(function (i, e) {
    $(this).on("click", function () {
      $(".btn-humb").removeClass("onAnime");
      $(".btn-humb").addClass("offAnime");
      if (sideNavi.hasClass("sp") ){
        sideNavi.css({ opacity: 0, zIndex: -1 })
        setTimeout(function () {
          $(".btn-humb").removeClass("on");
        }, 1900)
      }
      

      sideNaviIndex = i;
      $(this).addClass("click");

      naviList.each(function (i, e) {
        if (!$(this).hasClass("click") ){
          $(this).removeClass("on");
          $(this).removeClass("show");
          
          if( !$(".sideNavi").hasClass("sp") ){
            $(this).children("p").removeClass("on");
          }
        }
    });

      $(this).addClass("on");
      $(this).addClass("show");
      let thisClick = $(this);
      let offTop = content.eq(sideNaviIndex).offset().top;
      console.log("aa");
      $("html, body").animate({ scrollTop: offTop }, "slow","swing");
      // クリックされた瞬間だけ.clickをつけておく
      setTimeout(function () {
        thisClick.removeClass("click");
      }, 500)
    })
  });

  flgProfile = true;
  let beNum = 0;
  let nowNum = "";
  // スクロールした時
  $(document).on("scroll", function () {
    
  // スクロールするたびにスクロール値とる
  nowSc = $(document).scrollTop();
  if (!naviList.hasClass("click")) {
      //CONTACTの時だけ例外
    if (nowSc >= content.eq(4).offset().top) {
        nowNum = 4;
      }
    else {
      for(let i = 0; i <= 3; i++){
        let next = i+1;
        if (content.eq(i).offset().top <= nowSc && nowSc < content.eq(next).offset().top) {
          nowNum = i;
        }
      }
    }
    // 前いた場所とは違う場所に移動した時
    if (Number(nowNum) == Number(beNum)) {

    }
    else {
      naviList.eq(beNum).removeClass("show");
      naviList.eq(beNum).removeClass("on");
      naviList.children("p").eq(beNum).removeClass("on");

      naviList.eq(nowNum).addClass("show");
      naviList.eq(nowNum).addClass("on");
      naviList.children("p").eq(nowNum).addClass("on");
    }
  }
    if (nowSc >= content.eq(4).offset().top) {
      beNum = 4;
    }
    else {
      for (let i = 0; i <= 3; i++) {
        let next = i + 1;
        if (content.eq(i).offset().top <= nowSc && nowSc < content.eq(next).offset().top) {
          beNum = i;
        }
      }
    }
  }); // scroll

  // ハッシュタグ検索
  const hashList = $(".work-bottom__hash li");
  console.log(hashList);
  $(document).on("click",hashList,function(e){
    let clickHash = hashList.text();
    console.log(clickHash);
  })
});
