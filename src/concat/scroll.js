

//
// scroll
//

$(function(){
  // スクロールした時
  $(document).on("scroll", function (event) {

    // HOMEにいた時に下にスクロールするとWORKSヘ飛ぶ
    var afterSc = $(document).scrollTop();
    if (beforeSc < afterSc) {
      if (scFlg) {
        if ($(document).scrollTop() < $(window).height()) {
          $(document).scrollTop($(".content-works").offset().top)
        }
        scFlg = false;
        setTimeout(function () {
          scFlg = true;
        }, 1000)
      }
    }
    beforeSc = afterSc;


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

  }); // scroll
})