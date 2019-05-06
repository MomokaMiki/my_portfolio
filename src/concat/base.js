

//
// load
//

$(window).on("load", function () {

  // リロードしたらトップへ
  $('html').animate({ scrollTop: 0 }, '1');
  // リロードでスクロールアニメを見えなくする為に
  setTimeout(function () {
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
    for (var i = 6; i <= $(".worksList > li").length; i++) {
      $(".worksList > li").eq(i).addClass("none");
    }
  }, 1000);// setTimeout
});// window laod