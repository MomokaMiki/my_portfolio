$(function(){

  var beforeSc = $(document).scrollTop();
  var scFlg = true;
  $(document).on("scroll",function(){
    var afterSc = $(document).scrollTop();
    if (beforeSc < afterSc){
      if (scFlg ){
        if ($(document).scrollTop() < $(window).height()) {
          $(document).scrollTop($(".content-works").offset().top)
        }
        scFlg = false;
        setTimeout(function(){
          scFlg = true;
        },1000)
      }
    }
    beforeSc = afterSc;
  })

})