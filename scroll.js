  // nullじゃないってことは作ったのがあるってこと
  // timeoutがあるなら前回のを消す
  // clearだけだったら初回ないのに何消す？ってなるから
  
  
  var wheelFlg = true;
  var timerId = null;

  // スクロールした時
  var before = $(window).scrollTop();

  $(window).on("scroll",function(){
    var after = $(window).scrollTop();

      // 最初の一回だけスクロール
      if( wheelFlg ){

        if (timerId != null) {
          clearTimeout(timerId);
        }

        // 新しいタイマー作る
        timerId = setTimeout(function () {
          wheelFlg = true;
          timerId = null;
        }, 500)
        console.log("動く")
        // 下にスクロールした時
        if (before < after) {
          console.log("下")
        // 1が画面内に出てきた時
        var winHeight = $(window).height();
        var nextPos = document.getElementsByClassName("content")[1].getBoundingClientRect().top;

        if (winHeight >= nextPos) {
          var nextOff = $(".content").eq(1).offset().top;
          $('html').animate({ scrollTop: nextOff }, 500, "swing");
        }
      }
       wheelFlg = false;
    }
    before = after;
  })





var wheelFlg = true;
var timerId = null;

// スクロールした時
var before = $(window).scrollTop();

$(window).on("scroll", function () {
  var after = $(window).scrollTop();

  if (timerId != null) {
    clearTimeout(timerId);
  }

  // 新しいタイマー作る
  timerId = setTimeout(function () {
    console.log("タイマー作成")
    wheelFlg = true;
    timerId = null;
  }, 500)

  console.log("動く")
  // 下にスクロールした時
  if (before < after) {

    // 最初の一回だけスクロール
    if (wheelFlg) {


      console.log("下")
      //1が画面内に出てきた時
      var winHeight = $(window).height();
      var nextPos = document.getElementsByClassName("content")[1].getBoundingClientRect().top;

      if (winHeight >= nextPos) {
        var nextOff = $(".content").eq(1).offset().top;
        $('html').animate({ scrollTop: nextOff }, 500, "swing");
      }
      console.log("aa")
    }
    else {
      console.log("aaaaaa")
      $(document).scrollTop($(".content").eq(1).offset().top);
    }
    console.log("aa")
    wheelFlg = false;
  }

  before = after;
})




// 下にスクロールした時に
// 次のコンテンツが画面上に出てきたら
// その次のコンテンツを表示



var before = $(document).scrollTop();
var flg = true;
$(document).on("scroll", function (e) {

  console.log("スクロール")

  e.preventDefault();

  var after = $(document).scrollTop();
  if (flg) {
    if (before < after) {
      // 次のコンテンツの位置と、windowHeight+scrollTopを比べる
      var winHeight = $(window).height();
      var nextPos = $(".content").eq(1).offset().top;

      console.log(winHeight + after)
      console.log(nextPos)

      $(document).scrollTop(nextPos)
      if (winHeight + after == nextPos) {
        var nextOff = $(".content").eq(1).offset().top;
        $('html').animate({ scrollTop: nextOff }, 500, "swing");
      }
      flg = false;
    }
    return false;

  }
});