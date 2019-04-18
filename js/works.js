$(function(){
  $.ajax({
    url: "data-works.php",
    method: "get",
    cache: false,
    dataType: "json",
    timeout: 10000
  })
    .done(function(data){
      var worksInfo = data;
      console.log(worksInfo)

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
              <h3>${ worksInfo[i]['name'] }</h3>
              <ul class="list-device flex">
                <li><i class="fas fa-desktop ${ iconPc }"></i></li>
                <li><i class="fas fa-mobile-alt ${ iconSp }"></i></li>
              </ul>
            </div>
            <figure><a href="http://click.ecc.ac.jp/ecc/mmiki/material/${ worksInfo[i]['link']}" target="_blank"><img src="img/thumb-${ worksInfo[i]['link']}.png" alt="${worksInfo[i]['name'] }のサムネイル"></a></figure>
            <h4>${ worksInfo[i]['title'] }</h4>
            <p>${ worksInfo[i]['text'] }</p>
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
              <li><a href="">#${worksInfo[i]['season']}</a></li>
              <li><a href="">#${worksInfo[i]['type']}</a></li>
              <li><a href="">#約${worksInfo[i]['time']}時間</a></li>
            </ul>
          </div>
        </li>`

        $(".worksList").append(item);

        var softs = worksInfo[i]['soft'].split("/");
        $.each(softs,function(k,e){
          $(".worksList > li").eq(i).find(".used-soft ul").append(`<li><img src='img/soft-${softs[k]}.svg' alt='${softs[k] }のアイコン'></li>`);
        });

        var langs = worksInfo[i]['language'].split("/");
        $.each(langs, function (k, e) {
          $(".worksList > li").eq(i).find(".used-lang ul").append(`<li><img src='img/lang-${langs[k]}.svg' alt='${langs[k]}のアイコン'></li>`);
        });

        // setTimeout(function(){
          Ts.setAutoLoadFontSelector(".worksList", 100);
        // },100)
        
        
      })

      // ウィンドウの幅によって、WORKSの余りの空箱を追加
      var winWid = $(window).width();
      if ( winWid >= 1062 ){
        var addCount = 3 - worksInfo.length % 3;
        for (i = 1; i <= addCount; i++ ){
          $(".worksList").append("<li class='no'></li>");
        }
      }
      if (winWid >= 728 && winWid < 1062 ){
        var addCount = 2 - worksInfo.length % 2;
        for (i = 1; i <= addCount; i++) {
          $(".worksList").append("<li class='no'></li>");
        }
      }
            
    })
    .fail(function (error) {
      console.log(error);
    })
})



