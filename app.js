var main =  function() {
  $(".bild2").click(function(){
    $(".meny").animate({
      left: "0px"
  }, 200);
  $("body").animate({
    left: "285px"
  }, 200);
  });
  $(".bild3").click(function(){
    $(".meny").animate({
  left: "-285px"
    }, 200);
    $("body").animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);
