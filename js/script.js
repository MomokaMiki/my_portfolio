

//
// var
//

var worksList = $(".worksList");
var content = $(".content");
var sideNavi = $(".sideNavi");
var naviList = $(".sideNavi li");
var scTop = $(document).scrollTop();
var beforeSc = $(document).scrollTop();
var scFlg = true;
var flgProfile = true;


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
  }, 1500);// setTimeout
});// window laod


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


//
// window
//

$(function(){
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
})
$(function(){
  $.ajax({
    url: "read/works.php",
    method: "get",
    cache: false,
    dataType: "json",
    timeout: 10000
  })
  .done(function(data){
    var worksInfo = data;
    $.each(worksInfo,function (i, e) {

      var iconPc = "";
      var iconSp = "";
      if (worksInfo[i]['device'] == 2 ){
        iconPc = "on";
        iconSp = "on";
      }
      if (worksInfo[i]['device'] == 0  ){
        iconPc = "on";
      }
      if (worksInfo[i]['device'] == 1) {
        iconSp = "on";
      }
        
      var item = `
      <li class="flex">
        <div>
          <div class="flex">
            <div class="title flex">
              <h3>${ worksInfo[i]['workname'] }</h3>
            </div>
            <ul class="list-device flex">
              <li><i class="fas fa-desktop ${ iconPc }"></i></li>
              <li><i class="fas fa-mobile-alt ${ iconSp }"></i></li>
            </ul>
          </div>
          <figure><a href="http://click.ecc.ac.jp/ecc/mmiki/material/${ worksInfo[i]['link']}" target="_blank"><img src="img/thumb-${worksInfo[i]['link']}.png" alt="${worksInfo[i]['workname'] }のサムネイル"></a></figure>
          <h4>${ worksInfo[i]['title'] }</h4>
          <p>${ worksInfo[i]['worktext'] }</p>
        </div>
        <div>
          <ul class="list-used flex">
            <li class="used-soft">
              <h4>使用ソフト</h4>
              <ul class="flex"></ul>
            </li>
            <li class="used-lang">
              <h4>使用言語/スキル</h4>
              <ul class="flex"></ul>
            </li>
          </ul>
          <ul class="list-hash flex">
            <li>#${worksInfo[i]['season']}</li>
            <li>#${worksInfo[i]['worktype']}</li>
            <li>#約${worksInfo[i]['worktime']}時間</li>
          </ul>
        </div>
      </li>`
      $(".worksList").append(item);

      if (worksInfo[i]['proposal'] == "block") {
        var proposal = `<a href="pdf/${worksInfo[i]['link']}.pdf" target="_blank"><img src="img/icon-proposal.svg" alt='企画書を見る'></a>`
        $(".title").eq(i).append(proposal);
      }

      var softs = worksInfo[i]['soft'].split("/");
      $.each(softs,function(k,e){
        $(".worksList > li").eq(i).find(".used-soft ul").append(`<li><img src='img/soft-${softs[k]}.svg' alt='${softs[k] }のアイコン'></li>`);
      });

      var langs = worksInfo[i]['lang'].split("/");
      $.each(langs, function (k, e) {
        $(".worksList > li").eq(i).find(".used-lang ul").append(`<li><img src='img/lang-${langs[k]}.svg' alt='${langs[k]}のアイコン'></li>`);
      });

      Ts.setAutoLoadFontSelector(".worksList", 100);
    })

    addEmpty();

    // ウィンドウの幅によって、WORKSの余りの空箱を追加
    // 余りがある時だけ追加
    function addEmpty() {
      $(".no").remove();
      var winWid = $(window).width();
      if (winWid >= 1082) {
        if (!Number(worksInfo.length % 3) == 0){
          var addCount = 3 - worksInfo.length % 3;
          for (i = 1; i <= addCount; i++) {
            $(".worksList").append("<li class='no'></li>");
          }
          if($(".worksList").hasClass("rimit")){
            $(".worksList .no").addClass("none");
          }
        }
      }
      if (winWid >= 668 && winWid < 1082) {  
        if (!Number(worksInfo.length % 2) == 0){
          var addCount = 2 - worksInfo.length % 2;
          for (i = 1; i <= addCount; i++) {
            $(".worksList").append("<li class='no'></li>");
          }
        }
      }
    }

    $(window).on("resize", function () {
      addEmpty();
    });
  })
  .fail(function (error) {
    console.log(error);
  })
})