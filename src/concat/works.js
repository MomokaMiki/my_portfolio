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