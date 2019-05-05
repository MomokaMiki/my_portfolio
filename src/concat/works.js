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