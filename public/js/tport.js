// DEMO ONLY: Change Theme Color
var changeTheme = function(color){
  removeAllTheme();
  switch(color) {
    case 'dark':
      $.cookie("theme", "dark");
      break;
    case 'white':
      $.cookie("theme", "white");
      $('.navbar').addClass('theme-white');
      $('footer').addClass('theme-white');
      break;
    case 'red':
      $.cookie("theme", "red");
      $('.navbar').addClass('theme-red');
      $('footer').addClass('theme-red');
      break;
    case 'orange':
      $.cookie("theme", "orange");
      $('.navbar').addClass('theme-orange');
      $('footer').addClass('theme-orange');
      break;
    case 'yellow':
      $.cookie("theme", "yellow");
      $('.navbar').addClass('theme-yellow');
      $('footer').addClass('theme-yellow');
      break;
    case 'green':
      $.cookie("theme", "green");
      $('.navbar').addClass('theme-green');
      $('footer').addClass('theme-green');
      break;
    case 'blue':
      $.cookie("theme", "blue");
      $('.navbar').addClass('theme-blue');
      $('footer').addClass('theme-blue');
      break;
    case 'navy':
      $.cookie("theme", "navy");
      $('.navbar').addClass('theme-navy');
      $('footer').addClass('theme-navy');
      break;
    default:
      break;
  }
}

var removeAllTheme = function(){
  $('.navbar').removeClass('theme-white theme-dark theme-red theme-orange theme-yellow theme-green theme-blue theme-navy');
  $('footer').removeClass('theme-white theme-dark theme-red theme-orange theme-yellow theme-green theme-blue theme-navy');
}



// Document Ready
$( document ).ready(function() {

  // Top Nav Active Class
  $('.nav-item').each(function(){
    var thisPage = $('body').attr('name');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });

  // Viewpage Top Image Slider
  $("#view-top-slider").lightSlider({
    loop:true,
    keyPress:true
  });

  $('#scrollTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "normal");
    return false;
  });

  // DEMO ONLY: Find Theme color from Cookie
  switch($.cookie("theme")) {
    case 'white':
      $('.navbar').addClass('theme-white');
      $('footer').addClass('theme-white');
      break;
    case 'dark':
      $('.navbar').addClass('theme-dark');
      $('footer').addClass('theme-dark');
      break;
    case 'red':
      $('.navbar').addClass('theme-red');
      $('footer').addClass('theme-red');
      break;
    case 'orange':
      $('.navbar').addClass('theme-orange');
      $('footer').addClass('theme-orange');
      break;
    case 'yellow':
      $('.navbar').addClass('theme-yellow');
      $('footer').addClass('theme-yellow');
      break;
    case 'green':
      $('.navbar').addClass('theme-green');
      $('footer').addClass('theme-green');
      break;
    case 'blue':
      $('.navbar').addClass('theme-blue');
      $('footer').addClass('theme-blue');
      break;
    case 'navy':
      $('.navbar').addClass('theme-navy');
      $('footer').addClass('theme-navy');
      break;
    default:
      break;
  }

});



$(document).scroll(function () {
  ($(this).scrollTop() < 20) ? $('#scrollTop').hide() : $('#scrollTop').show();
});

