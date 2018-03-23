

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


});


$(document).scroll(function () {
  ($(this).scrollTop() < 20) ? $('#scrollTop').hide() : $('#scrollTop').show();
});

