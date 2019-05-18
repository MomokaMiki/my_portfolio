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