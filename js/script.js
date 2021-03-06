$(window).on("load",function(){

  // リロードしたらトップへ
  $('html').animate({ scrollTop: 0 }, '0.001');
  $.each($(".parts"), function (i, e) {
    $(".parts").eq(i).removeClass("on");
  })
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
    }, 4500)
  },200);
})
$(function(){
  const worksList = $(".worksList");
  const btnMore = $(".btn-more");
  
  // worksの一覧を追加表示させる関数
  function displayWorks ( works ){
    $.each(works, function (i) {
      
      let iconPc = "";
      let iconSp = "";
      if (works[i]['device'] == 2) {
        iconPc = "on";
        iconSp = "on";
      }
      if (works[i]['device'] == 0) {
        iconPc = "on";
      }
      if (works[i]['device'] == 1) {
        iconSp = "on";
      }

      let item = `
      <li class="work-box flex">
        <div class="work-main">
          <div class="work-main__head flex">
            <div class="work-title flex">
              <h3>${ works[i]['workname']}</h3>
            </div>
            <ul class="work-device flex">
              <li><i class="fas fa-desktop ${ iconPc}"></i></li>
              <li><i class="fas fa-mobile-alt ${ iconSp}"></i></li>
            </ul>
          </div>
          <figure class="work-main__img"><a href="${ works[i]['url']}" target="_blank"><img src="img/thumb-${works[i]['link']}.png" alt="${works[i]['workname']}のサムネイル"></a></figure>
          <h4 class="work-main__title">${ works[i]['title']}</h4>
          <p class="work-main__text">${ works[i]['worktext']}</p>
        </div>
        <div class="work-bottom">
          <ul class="work-bottom__used">
            <li class="used-soft flex">
              <h4>使用技術：</h4>
              <ul class="used-soft__list flex"></ul>
            </li>
            <li class="used-lang">
              <h4>担当部分：${ works[i]['part']}</h4>
            </li>
          </ul>
          <ul class="work-bottom__btn flex">
            <li><a href="${ works[i]['url']}" target="_blank">サイトを見る</a></li>
          </ul>
          <ul class="work-bottom__hash flex">
            <li data-hash="season">#&nbsp;${works[i]['season']}</li>
            <li data-hash="worktype">#&nbsp;${works[i]['worktype']}</li>
          </ul>
        </div>
      </li>`
      worksList.append(item);

      // 最新作品
      if (works[i]['new'] == 1) {
        let newWork = `<p class="work-new">NEW!!</p>`;
        $(".work-box").eq(i).append(newWork);
      }
      // 企画書の有無
      if (works[i]['proposal'] == "block") {
        let hash_proposal = `<li data-hash="proposal">#&nbsp;企画</li>`
        $(".work-bottom__hash").eq(i).append(hash_proposal);
        let btn_proposal = `<li><a href="pdf/${works[i]['link']}.pdf" target="_blank">企画書を見る</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_proposal);
      }
      // Githubの有無
      if (!works[i]['git'] == "") {
        let hash_git = `<li data-hash="git">#&nbsp;GitHub</li>`
        $(".work-bottom__hash").eq(i).append(hash_git);
        let btn_git = `<li><a href="${works[i]['git']}" target="_blank"><i class="fab fa-gitHub"></i>GitHubへ</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_git);
      }
      // スキル一覧
      let skills = works[i]['skill'].split("/");
      $.each(skills, function (k, e) {
        $(".used-soft__list").eq(i).append(`<li><img src='img/skill-${skills[k]}.svg' alt='${skills[k]}のアイコン'></li>`);
      });
    })


    // ６個目以降を消す
    for (let i = 6; i <= $(".work-box").length; i++) {
      $(".work-box").eq(i).addClass("none");
    }
  }

  // ウィンドウの幅によって、WORKSの余りの空箱を追加する関数
  function addEmpty(workBox) {
    $(".no").remove();
    const winWid = $(window).width();
    if (winWid >= 1) {
      if (!Number(workBox.length % 3) == 0) {
        let addCount = 3 - workBox.length % 3;
        for (i = 1; i <= addCount; i++) {
          worksList.append("<li class='work-box no'></li>");
        }
        if (worksList.hasClass("rimit")) {
          $(".worksList .no").addClass("none");
        }
      }
    }
    if (winWid >= 680 && winWid < 1100) {
      if (!Number(workBox.length % 2) == 0) {
        let addCount = 2 - workBox.length % 2;
        for (i = 1; i <= addCount; i++) {
          worksList.append("<li class='no'></li>");
        }
      }
    }
  }

  // 検索する時の表示非表示の関数
  function displaySwitch(hashSearchList,time){
    const workBox = $(".work-box");
    
    $("html, body").animate({ scrollTop: $(".content-works").offset().top }, "slow", "swing");
    setTimeout(function(){
      // 一覧削除
      workBox.removeClass("on");
      setTimeout(function () {
        workBox.remove();
        // 一覧表示
        displayWorks(hashSearchList);
        addEmpty(hashSearchList);
        let i = 0;
        setTimeout(function () {
          while (i < 3) {
            $(".work-box").eq(i).addClass("on")
            i++;
          }
        }, 200)
      }, 400);
    },time)
  }

  $.ajax({
    url: "read/works.php",
    method: "get",
    cache: false,
    dataType: "json",
    timeout: 3000
  })
  .done(function(data){
    const worksInfo = data.slice();

    // 一覧表示
    displayWorks(worksInfo);

    // タイプスクエアリロード
    Ts.setAutoLoadFontSelector(".worksList", 100);

    // 余白分のworklist追加
    addEmpty(worksInfo);

    // 画面サイズが変わるたびにaddEmptyを実行
    // $(window).on("resize", function () {
    //   console.log("a")
    //   let workBox = $(".work-box");
    //   addEmpty();
    // });

    // ハッシュタグ検索をする関数
    function hashSearch(clickHashList, hashText){
      $(".searchArea__btn").addClass("on");
      $(".searchArea__content").text(`# ${hashText}で検索中`);
      btnMore.html("View&nbsp;More");

      if (clickHashList == "season") {
        worksList.addClass("rimit");
        let hashSearchList = worksInfo.filter(function (work) {
          return work.season == hashText;
        });
        displaySwitch(hashSearchList, 800);
        if (hashSearchList.length <= 6) {
          btnMore.css("display", "none");
        }
      }

      if (clickHashList == "worktype") {
        worksList.addClass("rimit");
        let hashSearchList = worksInfo.filter(function (work) {
          return work.worktype == hashText;
        });
        displaySwitch(hashSearchList, 800);
        if (hashSearchList.length <= 6) {
          btnMore.css("display", "none");
        }
      }

      if (clickHashList == "git") {
        worksList.addClass("rimit");
        let hashSearchList = worksInfo.filter(function (work) {
          return work.git !== null;
        });
        displaySwitch(hashSearchList, 800);
        if (hashSearchList.length <= 6) {
          btnMore.css("display", "none");
        }
      }

      if (clickHashList == "proposal") {
        worksList.addClass("rimit");
        let hashSearchList = worksInfo.filter(function (work) {
          return work.proposal == "block";
        });
        displaySwitch(hashSearchList, 800);
        if (hashSearchList.length <= 6) {
          btnMore.css("display", "none");
        }
      }
    }
    

    // workの中のハッシュリストから検索
    const hashList = ".work-bottom__hash li";
    
    $(document).on("click", hashList, function (e) {
      let clickHashList = $(e.target).attr("data-hash");
      let clickHash = $(e.target).text();
      let hashText = clickHash.replace(/#+\s/, "");
      hashSearch(clickHashList, hashText);
    })

    // タイトル下の検索候補から検索
    $(".searchArea__hash li").on("click",function(){
      let clickHashList = $(this).attr("data-hash");
      let clickHash = $(this).text();
      let hashText = clickHash.replace(/#+\s/, "");
      hashSearch(clickHashList, hashText);
    })

    // 検索を消すボタン
    $(".searchArea__btn").on("click", function () {
      $(".searchArea").removeClass("on");
      worksList.addClass("rimit");
      $(".searchArea__btn").removeClass("on");
      $(".searchArea__content").text("# ハッシュタグで絞り込み");
      // 一覧表示
      displaySwitch(worksInfo,200);
      btnMore.css("display","block");
      btnMore.html("View&nbsp;More");
    })
  })
  .fail(function (error) {
    console.log(error.responseText);
  })
})
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
$(function(){
  const worksList = $(".worksList");
  const content = $(".content");
  const sideNavi = $(".sideNavi");
  const naviList = $(".naviList");
  const profListSlill = $(".prof-list-kill");
  const btnTop = $(".btn-top");
  const conWorksTop = $(".content-works").offset().top;
  const btnHumb = $(".btn-humb");

  // 作品 ViewMoreボタン
  $(document).on('click', '.btn-more', function () {
    const workBox = $(".work-box");
    if( worksList.hasClass("rimit") ){
      workBox.removeClass("none");
      $(".btn-more").html("Close")
      worksList.removeClass("rimit")
      setTimeout(function(){
        workBox.addClass("on");
      },200)
    }
    else{
      $("html, body").animate({ scrollTop: conWorksTop }, "swing");
      setTimeout(function(){
        $(".btn-more").html("View&nbsp;More");
        worksList.addClass("rimit")
        for (let i = 6; i <= workBox.length; i++) {
          workBox.eq(i).addClass("none");
        }
      },1000)
    }        
  });

  // ↓WORKSボタン
  $(".scroll-works").on("click",function(){
    $("html, body").animate({ scrollTop: conWorksTop }, "swing");
  })

  // ハンバーガーメニュー
  btnHumb.on("click", function () {
    $(this).removeClass("offAnime");
    $(this).removeClass("onAnime");
    if ($(this).hasClass("on")) {
      $(this).addClass("offAnime");
      sideNavi.css({ opacity: 0, zIndex: -1 })
      setTimeout(function () {
        btnHumb.removeClass("on");
      }, 1900)
    }
    else {
      $(this).addClass("onAnime");
      sideNavi.css({ opacity: 1, zIndex: 1 })
      setTimeout(function () {
        btnHumb.addClass("on");
      }, 1900)
    }
  })

  // Topへ戻るボタン
  btnTop.on("click",function(){
    $("html,body").animate({ scrollTop: 0 }, "slow", "swing");
  })

  // スマホサイズかどうかを測定
  if ($(window).width() <= 960) {
    // SP
    $(".sideNavi li p").addClass("on");
    sideNavi.addClass("sp");
  }

  // 画面サイズ変わるたびに変更
  $(window).on("resize", function () {
    addEmptySkill();
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
    $(this).addClass("mouseon");
  })
  naviList.on("mouseout", function () {
    if (!$(this).hasClass("show")) {
      $(this).removeClass("on");
      if (!sideNavi.hasClass("sp")) {
        $(this).children("p").removeClass("on");
      }
    }
    $(this).removeClass("mouseon");
  })

  // サイドナビをクリックした時
  let sideNaviIndex = 0;
  naviList.each(function (i, e) {
    $(this).on("click", function () {
      btnHumb.removeClass("onAnime");
      btnHumb.addClass("offAnime");
      if (sideNavi.hasClass("sp") ){
        sideNavi.css({ opacity: 0, zIndex: -1 })
        setTimeout(function () {
          btnHumb.removeClass("on");
        }, 1900)
      }
      sideNaviIndex = i;
      $(this).addClass("click");
      naviList.each(function (i, e) {
        if (!$(this).hasClass("click") ){
          $(this).removeClass("on");
          $(this).removeClass("show");
          
          if (!sideNavi.hasClass("sp") ){
            $(this).children("p").removeClass("on");
          }
        }
      });
      $(this).addClass("on");
      $(this).addClass("show");
      let thisClick = $(this);
      let offTop = content.eq(sideNaviIndex).offset().top;
      $("html, body").animate({ scrollTop: offTop }, "slow","swing");
      // クリックされた瞬間だけ.clickをつけておく
      setTimeout(function () {
        thisClick.removeClass("click");
      }, 500)
    })
  });

  flgProfile = true;
  let beNum = 0;
  let nowNum = "";
  // スクロールした時
  $(document).on("scroll", function () {
    // スクロールするたびにスクロール値とる
    nowSc = $(document).scrollTop();

    // topへ戻るボタン
    if (nowSc >= conWorksTop){
      btnTop.addClass("on");
    }
    else{
      btnTop.removeClass("on");
    }

    if (!naviList.hasClass("click")) {
        //CONTACTの時だけ例外
      if (nowSc >= content.eq(4).offset().top) {
          nowNum = 4;
        }
      else {
        for(let i = 0; i <= 3; i++){
          let next = i+1;
          if (content.eq(i).offset().top <= nowSc && nowSc < content.eq(next).offset().top) {
            nowNum = i;
          }
        }
      }
      // 前いた場所とは違う場所に移動した時
      if ( Number(nowNum) !== Number(beNum)) {
        naviList.eq(beNum).removeClass("show");
        naviList.eq(beNum).removeClass("on");
        naviList.eq(nowNum).addClass("show");
        naviList.eq(nowNum).addClass("on");
        if (!sideNavi.hasClass("sp")) {
          naviList.children("p").eq(beNum).removeClass("on");
          naviList.children("p").eq(nowNum).addClass("on");
        }
      }
    }
    if (nowSc >= content.eq(4).offset().top) {
      beNum = 4;
    }
    else {
      for (let i = 0; i <= 3; i++) {
        let next = i + 1;
        if (content.eq(i).offset().top <= nowSc && nowSc < content.eq(next).offset().top) {
          beNum = i;
        }
      }
    }
  }); // scroll

  // ウィンドウの幅によって、WORKSの余りの空箱を追加する関数
  function addEmptySkill() {
    $(".append").remove();
    let skillBox = profListSlill.children("li");
    const listWid = profListSlill.width();
    let boxWid = skillBox.width();
    let column = Math.floor(listWid / boxWid);
    let result = skillBox.length % column;
    for (let i = result; i <= column; i++) {
      profListSlill.append("<li class='append'></li>");
    }
  } 
  addEmptySkill();
});