$(function(){
  $.ajax({
    url: "read/works.php",
    method: "get",
    cache: false,
    dataType: "json",
    timeout: 10000
  })
  .done(function(data){
    const worksInfo = data;
    $.each(worksInfo,function (i) {

      let iconPc = "";
      let iconSp = "";
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
        
      let item = `
      <li class="work-box flex">
        <div class="work-main">
          <div class="work-main__head flex">
            <div class="work-title flex">
              <h3>${ worksInfo[i]['workname'] }</h3>
            </div>
            <ul class="work-device flex">
              <li><i class="fas fa-desktop ${ iconPc }"></i></li>
              <li><i class="fas fa-mobile-alt ${ iconSp }"></i></li>
            </ul>
          </div>
          <figure class="work-main__img"><a href="${ worksInfo[i]['url']}" target="_blank"><img src="img/thumb-${worksInfo[i]['link']}.png" alt="${worksInfo[i]['workname'] }のサムネイル"></a></figure>
          <h4 class="work-main__title">${ worksInfo[i]['title'] }</h4>
          <p class="work-main__text">${ worksInfo[i]['worktext'] }</p>
        </div>
        <div class="work-bottom">
          <ul class="work-bottom__used">
            <li class="used-soft flex">
              <h4>使用技術：</h4>
              <ul class="used-soft__list flex"></ul>
            </li>
            <li class="used-lang">
              <h4>担当部分：${ worksInfo[i]['part'] }</h4>
            </li>
          </ul>
          <ul class="work-bottom__btn flex">
            <li><a href="${ worksInfo[i]['url']}" target="_blank">サイトを見る</a></li>
          </ul>
          <ul class="work-bottom__hash flex">
            <li>#&nbsp;${worksInfo[i]['season']}</li>
            <li>#&nbsp;${worksInfo[i]['worktype']}</li>
          </ul>
        </div>
      </li>`
      $(".worksList").append(item);

      // 最新作品
      if (worksInfo[i]['new'] == 1 ){
        let newWork = `<p class="work-new">NEW!!</p>`;
        $(".work-box").eq(i).append(newWork);
      }
      // 企画書の有無
      if (worksInfo[i]['proposal'] == "block") {
        let hash_proposal = `<li>#&nbsp;企画</li>`
        $(".work-bottom__hash").eq(i).append(hash_proposal);
        console.log("企画書"+i)
        let btn_proposal = `<li><a href="pdf/${worksInfo[i]['link']}.pdf" target="_blank">企画書を見る</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_proposal);
      }
      // Githubの有無
      if (!worksInfo[i]['git'] == "") {
        let hash_git = `<li>#&nbsp;Github</li>`
        $(".work-bottom__hash").eq(i).append(hash_git);
        console.log("Github" + i)
        let btn_git = `<li><a href="${worksInfo[i]['git']}" target="_blank"><i class="fab fa-github"></i>Githubへ</a></li>`
        $(".work-bottom__btn").eq(i).append(btn_git);
      }
      // スキル一覧
      let skills = worksInfo[i]['skill'].split("/");
      $.each(skills,function(k,e){
        $(".worksList > li").eq(i).find(".used-soft ul").append(`<li><img src='img/skill-${skills[k]}.svg' alt='${skills[k] }のアイコン'></li>`);
      });
      // タイプスクエアリロード
      Ts.setAutoLoadFontSelector(".worksList", 100);
    })
    // 余白分のworklist追加
    addEmpty();

    // ６個目以降を消す
    for (let i = 6; i <= $(".worksList > li").length; i++) {
      $(".worksList > li").eq(i).addClass("none");
    }

    // ウィンドウの幅によって、WORKSの余りの空箱を追加
    function addEmpty() {
      $(".no").remove();
      const winWid = $(window).width();
      if (winWid >= 1) {
        if (!Number(worksInfo.length % 3) == 0){
          let addCount = 3 - worksInfo.length % 3;
          for (i = 1; i <= addCount; i++) {
            $(".worksList").append("<li class='work-box no'></li>");
          }
          if($(".worksList").hasClass("rimit")){
            $(".worksList .no").addClass("none");
          }
        }
      }
      if (winWid >= 680 && winWid < 1100) {  
        if (!Number(worksInfo.length % 2) == 0){
          let addCount = 2 - worksInfo.length % 2;
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