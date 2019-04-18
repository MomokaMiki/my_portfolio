$(function(){

  // pcサイズの場合
  if ($(".sideNavi").hasClass("pc")){
    // サイドナビ
    $(".sideNavi").hover(function(){
      $(this).addClass("on");
      $(".contents").addClass("on");
      $("html").removeClass("on");
    },
    function(){
      $(this).removeClass("on");
      $(".contents").removeClass("on");
      $("html").addClass("on");
    });

    $(".sideNavi li").hover(function(){
      $(this).children("p").addClass("on");
    },
    function(){
      $(this).children("p").removeClass("on");
    });
  }
  
  // ４秒後に実行

  // サイドナビの透明度変更
  // サイドナビをクリックした時
  var sideNaviIndex = 0;
  $(".sideNavi li").each(function(i,e){
    $(".sideNavi li").eq(i).on("click", function () {
      sideNaviIndex = i;
      var offTop = $(".content").eq(sideNaviIndex).offset().top;
      $(document).scrollTop(offTop);
    })
  });


  // スクロール前のスクロール値
  var beforeSc = $(document).scrollTop();

  // スクロールした時
  $(document).on("scroll",function(){

    var scTop = $(this).scrollTop();
    var content = $(".content");

    $(".sideNavi li").removeClass("show");
    content.each(function(i,e){
      var next = i+1;
      // CONTACTの時だけ例外
      if (scTop >= $(".content").eq(4).offset().top ){
        $(".sideNavi li").eq(4).addClass("show");
      }
      else{
        if ($(".content").eq(i).offset().top <= scTop && scTop < $(".content").eq(next).offset().top) {
          $(".sideNavi li").eq(i).addClass("show");
        }
      }      
  
    })
  });


  

  var wheelFlg = true;
  $(window).on("wheel",function(e){
    console.log(wheelFlg);

    // wheelイベントを一回だけ　
    if (wheelFlg) {

      console.log("ホイル")
      if ( e.originalEvent.deltaY ){
        var delta = -(e.originalEvent.deltaY);
      }
      else{
        if (e.originalEvent.wheelDelta ){
          var delta = e.originalEvent.wheelDelta;
        }
        else{
          var delta = -(e.originalEvent.detail)
        }
      }

      // 下にスクロールしていたら
      if (delta < 0) {
        console.log(delta)
        var winHeight = $(window).height();
        var nextPos = document.getElementsByClassName("content")[1].getBoundingClientRect().top;

        // もし2つめの画面からの位置が画面の高さより小さくなったらそのコンテンツへ
        if (winHeight >= nextPos) {
            var nextOff = $(".content").eq(1).offset().top;
            $(document).scrollTop(nextOff);
          }
        }
      wheelFlg = false;
      }
    
    });// wheel
  

      //e.preventDefault();

    // ? もし
    // true : false 
    // var delta = e.originalEvent.deltaY 
    // ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta 
    // ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

    //   // プラスなら上のコンテンツへ
    //   if(flg){
    //   if (delta > 0) {
    //     console.log("うえへ")
    //     var offTop = $(".content").eq(sideNaviIndex - 1).offset().top;
    //   }
    //   // マイナスなら下のコンテンツへ
    //   else{
    //     console.log("下へ")
    //     var offTop = $(".content").eq(sideNaviIndex + 1).offset().top;
    //   }
    //   $(document).scrollTop(offTop);
    //   flg = false;
    // }

















  // トップ画面表示
  $(".mainVisual").css("opacity", "1")
  setTimeout(function(){
    $(".content-home").addClass("on");
  },2000)

  // スクロール値が100の時スクロールしたらーーーの位置へ

  var scTop = $(document).scrollTop();
  var ot2 = $(".content").eq(1).offset().top;
  setTimeout(function () {
    if (scTop == 100) {
      $(document).scrollTop(ot2);
      console.log("100")
    }
  }, 4000)

})