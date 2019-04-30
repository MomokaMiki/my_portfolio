  var wheelFlg = true;

  // ホイールして0.5秒の間はwheelできない
  // ホイールしたら flg falseに変える時にホイール止めて0.5秒後にok

  // 上に上がってる時は0.5秒後とかいらん？

  var timerId = null;
  $(window).on("wheel",function(e){
    e.prevenDefault();
    console.log(wheelFlg);
    // timerId１回目動く->timerIdあるので１回目止める->２回目動く->２回目止める...最後動く
    // 最後にwheelした時だけtimeoutを動かす

    // wheelするたびにタイマー削除、作成をする
    console.log("最初timerId" + timerId)
    // timerIdがnullじゃないとき=あったら、timeout動かないように消す
    // if (timerId == null) {
    //console.log(timerId)
    console.log("タイマー削除")
    clearTimeout(timerId);
    // }

    // 新しいタイマー作る
    timerId = setTimeout(function () {
      wheelFlg = true;
      // timerId = null;

      console.log("最後0.5秒後:" + wheelFlg)
      console.log(timerId)
    }, 500)
    
    // wheelイベントが残ってるけどwheelFlgがfalse
    // タイマーも削除されてちゃんと動いてる

    // wheelイベントを一回だけ　
    if (wheelFlg) {

      console.log("ホイルイベントホイルイベントホイルイベント")
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

      console.log("deleta:"+delta)
      // 下にスクロールしていたら
      if (delta < 0) {
        
        var winHeight = $(window).height();
        var nextPos = document.getElementsByClassName("content")[1].getBoundingClientRect().top;

        // もし2つめの画面からの位置が画面の高さより小さくなったらそのコンテンツへ
        if (winHeight >= nextPos) {
            var nextOff = $(".content").eq(1).offset().top;
            $(document).scrollTop(nextOff);
          }
        wheelFlg = false;
        }
      }
      else{
        console.log("else")
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






$(this).children("p").eq(i).addClass("on");
$(this).eq(i).addClass("goal");