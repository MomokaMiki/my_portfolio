$(function(){
  const worksList = $(".worksList");
  const content = $(".content");
  const sideNavi = $(".sideNavi");
  const naviList = $(".naviList");
  const profListSlill = $(".prof-list-kill");
  const btnTop = $(".btn-top");
  const conWorksTop = $(".content-works").offset().top;
  const btnHumb = $(".btn-humb");

  // 作品 ViewMoreボタン
  $(document).on('click', '.btn-more', function () {
    const workBox = $(".work-box");
    if( worksList.hasClass("rimit") ){
      workBox.removeClass("none");
      $(".btn-more").html("Close")
      worksList.removeClass("rimit")
      setTimeout(function(){
        workBox.addClass("on");
      },200)
    }
    else{
      $("html, body").animate({ scrollTop: conWorksTop }, "swing");
      setTimeout(function(){
        $(".btn-more").html("View&nbsp;More");
        worksList.addClass("rimit")
        for (let i = 6; i <= workBox.length; i++) {
          workBox.eq(i).addClass("none");
        }
      },1000)
    }        
  });

  // ↓WORKSボタン
  $(".scroll-works").on("click",function(){
    $("html, body").animate({ scrollTop: conWorksTop }, "swing");
  })

  // ハンバーガーメニュー
  btnHumb.on("click", function () {
    $(this).removeClass("offAnime");
    $(this).removeClass("onAnime");
    if ($(this).hasClass("on")) {
      $(this).addClass("offAnime");
      sideNavi.css({ opacity: 0, zIndex: -1 })
      setTimeout(function () {
        btnHumb.removeClass("on");
      }, 1900)
    }
    else {
      $(this).addClass("onAnime");
      sideNavi.css({ opacity: 1, zIndex: 1 })
      setTimeout(function () {
        btnHumb.addClass("on");
      }, 1900)
    }
  })

  // Topへ戻るボタン
  btnTop.on("click",function(){
    $("html,body").animate({ scrollTop: 0 }, "slow", "swing");
  })

  // スマホサイズかどうかを測定
  if ($(window).width() <= 960) {
    // SP
    $(".sideNavi li p").addClass("on");
    sideNavi.addClass("sp");
  }

  // 画面サイズ変わるたびに変更
  $(window).on("resize", function () {
    addEmptySkill();
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
      btnHumb.removeClass("onAnime");
      btnHumb.addClass("offAnime");
      if (sideNavi.hasClass("sp") ){
        sideNavi.css({ opacity: 0, zIndex: -1 })
        setTimeout(function () {
          btnHumb.removeClass("on");
        }, 1900)
      }
      sideNaviIndex = i;
      $(this).addClass("click");
      naviList.each(function (i, e) {
        if (!$(this).hasClass("click") ){
          $(this).removeClass("on");
          $(this).removeClass("show");
          
          if (!sideNavi.hasClass("sp") ){
            $(this).children("p").removeClass("on");
          }
        }
      });
      $(this).addClass("on");
      $(this).addClass("show");
      let thisClick = $(this);
      let offTop = content.eq(sideNaviIndex).offset().top;
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

    // topへ戻るボタン
    if (nowSc >= conWorksTop){
      btnTop.addClass("on");
    }
    else{
      btnTop.removeClass("on");
    }

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
      if ( Number(nowNum) !== Number(beNum)) {
        naviList.eq(beNum).removeClass("show");
        naviList.eq(beNum).removeClass("on");
        naviList.eq(nowNum).addClass("show");
        naviList.eq(nowNum).addClass("on");
        if (!sideNavi.hasClass("sp")) {
          naviList.children("p").eq(beNum).removeClass("on");
          naviList.children("p").eq(nowNum).addClass("on");
        }
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

  // ウィンドウの幅によって、WORKSの余りの空箱を追加する関数
  function addEmptySkill() {
    $(".append").remove();
    let skillBox = profListSlill.children("li");
    const listWid = profListSlill.width();
    let boxWid = skillBox.width();
    let column = Math.floor(listWid / boxWid);
    let result = skillBox.length % column;
    for (let i = result; i <= column; i++) {
      profListSlill.append("<li class='append'></li>");
    }
  } 
  addEmptySkill();
});