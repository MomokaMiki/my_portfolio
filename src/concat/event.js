// ローディング画面表示
$(function(){
  var worksList = $(".worksList");
  var content = $(".content");
  var sideNavi = $(".sideNavi");
  var naviList = $(".naviList");
  var scTop = $(document).scrollTop();
    


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
      $(document).scrollTop($(".content-works").offset().top)
    })

    var content = $(".content");
    var sideNavi = $(".sideNavi");
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
    })
    naviList.on("mouseout", function () {
      if (!$(this).hasClass("show")) {
        $(this).removeClass("on");
        if (!sideNavi.hasClass("sp")) {
          $(this).children("p").removeClass("on");
        }
      }
    })

    // サイドナビをクリックした時
    var sideNaviIndex = 0;
    naviList.each(function (i, e) {
      naviList.eq(i).on("click", function () {
        $("html").css("overflow", "visible");
        sideNaviIndex = i;
        $(this).addClass("click");
        $(this).addClass("on");
        $(this).addClass("show");
        var thisClick = $(this);
        var offTop = content.eq(sideNaviIndex).offset().top;
        $(document).scrollTop(offTop);
        // クリックされた瞬間だけ.clickをつけておく
        setTimeout(function () {
          thisClick.removeClass("click");
        }, 1500)
      })
    });

    flgProfile = true;
    // スクロールした時
    $(document).on("scroll", function (event) {

      content.each(function (i, e) {
        // クリックされたリスト以外のものはクラス削除しておく
        if (!naviList.eq(i).hasClass("click")) {
          naviList.eq(i).removeClass("show");
          naviList.eq(i).removeClass("on");
          if (!sideNavi.hasClass("sp")) {
            naviList.eq(i).children("p").removeClass("on");
          }
        }

        // クリックせずに普通にスクロールした時の処理
        if (!naviList.hasClass("click")) {
          var next = i + 1;
          //CONTACTの時だけ例外
          if (scTop >= content.eq(4).offset().top) {
            naviList.eq(4).addClass("show");
            naviList.eq(4).addClass("on");
            naviList.children("p").eq(4).addClass("on");
          }
          else {
            if (content.eq(i).offset().top <= scTop && scTop < content.eq(next).offset().top) {
              naviList.eq(i).addClass("show");
              naviList.eq(i).addClass("on");
              naviList.children("p").eq(i).addClass("on");
            }
          }
        }
      })



    }); // scroll

});// window laod
