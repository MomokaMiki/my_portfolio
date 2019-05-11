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
      // $("html").css("overflow", "visible");
    }, 4500)
  },200);
  
})

$(function(){
  var beforeSc = $(document).scrollTop();
  var scFlg = true;
  var flgProfile = true;
  
  $(document).on("scroll",function(){
    var scTop = $(document).scrollTop();
    var afterSc = $(document).scrollTop();

    if ( afterSc > 0 ){
      if (beforeSc < afterSc ) {

        if (scFlg) {
          if ($(document).scrollTop() < $(window).height()) {
            // naviListがクリックされてなかったらWORKSヘ
            if (!$(".naviList").hasClass("click")) {
              $("html, body").animate({ scrollTop: $(".content-works").offset().top }, "swing");

              // $(document).scrollTop($(".content-works").offset().top)
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
  var worksList = $(".worksList");
  var content = $(".content");
  var sideNavi = $(".sideNavi");
  var naviList = $(".naviList");
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
        for (var i = 6; i <= $(".worksList > li").length; i++) {
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
  var sideNaviIndex = 0;
  naviList.each(function (i, e) {
    $(this).on("click", function () {
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
      var thisClick = $(this);
      var offTop = content.eq(sideNaviIndex).offset().top;
      $("html, body").animate({ scrollTop: offTop }, "swing");
      // クリックされた瞬間だけ.clickをつけておく
      setTimeout(function () {
        thisClick.removeClass("click");
      }, 500)
    })
  });

  flgProfile = true;
  var beNum = 0;
  var nowNum = "";
  // スクロールした時
  $(document).on("scroll", function () {
    
  // スクロールするたびにスクロール値とる
  nowSc = $(document).scrollTop();
  if (!naviList.hasClass("click")) {
      var next = i + 1;
      //CONTACTの時だけ例外
    if (nowSc >= content.eq(4).offset().top) {
        nowNum = 4;
      }
    else {
      for(var i = 0; i <= 3; i++){
        var next = i+1;
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
      for (var i = 0; i <= 3; i++) {
        var next = i + 1;
        if (content.eq(i).offset().top <= nowSc && nowSc < content.eq(next).offset().top) {
          beNum = i;
        }
      }
    }
  }); // scroll
});
