$(document).ready(function () {
  $('#mycarousel').carousel({ interval: 2000 });

  $('#carouselButton').click(function () {

    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }
    else {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    };


  });

  $('#resButton').click(function () {
    console.log("button click works")
    $('#resModal').modal('show')
  });
 
  $('#resClose').click(function () {
    console.log("login click click works")
    $('#resModal').modal('hide')
  });
  $('#resClose2').click(function () {
    console.log("login click click works")
    $('#resModal').modal('hide')
  });

  $('#loginButton').click(function () {
    console.log("login click click works")
    $('#loginModal').modal('show')
  });
  $('#loginClose').click(function () {
    console.log("login click click works")
    $('#loginModal').modal('hide')
  });
  $('#loginClose2').click(function () {
    console.log("login click click works")
    $('#loginModal').modal('hide')
  });

});