var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.bild2').click(function() {
    $('.meny').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.bild3').click(function() {
    $('.meny').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
