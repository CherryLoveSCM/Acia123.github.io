var main =  function() {
  $(".bild2").click(function(){
    $(".meny").animate({
      left: "0px"
  }, 300);
  $("body").animate({
    left: "285px"
  }, 300);
  });
  $(".bild3").click(function(){
    $(".meny").animate({
  left: "-285px"
    }, 300);
    $("body").animate({
      left: "0px"
    }, 300);
  });
};
$(document).ready(main);
