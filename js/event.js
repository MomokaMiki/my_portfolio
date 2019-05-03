// ローディング画面表示
$(window).on("load", function () {

  // 変数
  var sideNavi = $(".sideNavi");
  var sideNaviList = $(".sideNavi li");
  var worksList = $(".worksList");
  var content = $(".content");

  // リロードしたらトップへ
  $('html').animate({ scrollTop: 0 }, '1');
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
      $("html").css("overflow", "visible");
    }, 4500)
    
    // ６個目以降を消す
    for (var i = 6; i <= $(".worksList > li").length; i++){
      $(".worksList > li").eq(i).addClass("none");
    }

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

    // ハンバーガーメニュー
    $(".btn-humb").on("click",function(){
      $(this).removeClass("offAnime");
      $(this).removeClass("onAnime");
      if($(this).hasClass("on")){
        $(this).addClass("offAnime");
        sideNavi.css({ opacity: 0, zIndex: -1 })
        setTimeout(function () {
          $(".btn-humb").removeClass("on");
        },1900)
      }
      else{
        $(this).addClass("onAnime");
        sideNavi.css({opacity:1,zIndex:1})
        setTimeout(function(){
          $(".btn-humb").addClass("on");
        },1900)
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
      else{
        sideNavi.css({ opacity: 1, zIndex: 1 })
        $(".sideNavi li p").removeClass("on");
        sideNaviList.each(function(){
          if($(this).hasClass("show")){
            $(this).children("p").addClass("on");
          }
        })
      }
    });

    // ホバーイベント
    sideNaviList.on("mouseover", function () {
      $(this).children("p").addClass("on");
      $(this).addClass("on");
    })
    sideNaviList.on("mouseout", function () {
      if (!$(this).hasClass("show")) {
        $(this).removeClass("on");
        if (!sideNavi.hasClass("sp")){
          $(this).children("p").removeClass("on");
        }
      }
    })

    // サイドナビをクリックした時
    var sideNaviIndex = 0;
    sideNaviList.each(function (i, e) {
      sideNaviList.eq(i).on("click", function () {
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
      var scTop = $(this).scrollTop();
      var naviList = sideNaviList;

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
  

      // works表示アニメーション
      $.each($(".worksList > li"), function (i, e) {
        if ($(this).offset().top - scTop < $(window).height()/4*3) {
          if(!$(this).hasClass("none")){
            if(!$(this).hasClass("no")){
              $(this).addClass("on");
            }
          }
        }
        else{
          $(this).removeClass("on");
        }
      })

      // profile表示アニメーション
      if ($(".content-profile").offset().top - scTop < $(window).height() / 2 ){
        if( flgProfile ){
          $.each($(".parts"), function (i, e) {
            setTimeout(function () {
              $(".parts").eq(i).addClass("on");
            }, 80 * i)
          }) 
          flgProfile = false;
        }
      }
      else{
        $.each($(".parts"), function (i, e) {
          setTimeout(function () {
            $(".parts").eq(i).removeClass("on");
          }, 40 * i)
        }) 
        flgProfile = true;
      }

      // history表示アニメーション
      $.each($(".content-history li"),function(i,e){
        if ($(this).offset().top - scTop < $(window).height() / 4 * 3) {
          $(this).children("p").addClass("on");
          $(this).find("h3").addClass("on");
        }
        else{
          $(this).children("p").removeClass("on");
          $(this).find("h3").removeClass("on");
        }
      })
      $.each($(".content-history li > div p"), function (i, e) {
        if ($(this).offset().top - scTop < $(window).height() / 4 * 3) {
          $(this).addClass("on");
        }
        else{
          $(this).removeClass("on");
        }
      })

      // contact表示アニメーション
      if( $(".content-contact").offset().top - scTop < $(window).height() / 2 ){
        $(".content-contact > div").addClass("on");
      }
      else{
        $(".content-contact > div").removeClass("on");
      }

    }); // scroll
  },1500);// setTimeout
});// window laod
