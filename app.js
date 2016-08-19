var main =  function() {
  $(".bild3").click(function(){
    $(".meny").animate({
      left: "0px"
  }, 200);
  $(".main").animate({
    left: "300px"
  }, 200);
  });
  $(".bild2").click(function(){
    $(".meny").animate({
  left: "-300px"
    }, 200);
    $(".main").animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);
