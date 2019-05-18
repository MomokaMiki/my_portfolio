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
});
