

//
// event
//

$(function(){
  // 作品 ViewMoreボタン
  $(document).on('click', '.btn-more', function () {
    if (worksList.hasClass("rimit")) {
      $(".worksList > li").removeClass("none");
      $(".btn-more").html("Close")
      worksList.removeClass("rimit")
      setTimeout(function () {
        $(".worksList > li").addClass("on");
      }, 200)
    }
    else {
      $(document).scrollTop($(".content-works").offset().top)
      setTimeout(function () {
        $(".btn-more").html("View&nbsp;More");
        worksList.addClass("rimit")
        for (var i = 6; i <= $(".worksList > li").length; i++) {
          $(".worksList > li").eq(i).addClass("none");
        }
      }, 1000)
    }
  });

  // ↓WORKSボタン
  $(".scroll-works").on("click", function () {
    $(document).scrollTop($(".content-works").offset().top)
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
})