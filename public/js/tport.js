

// Document Ready
$( document ).ready(function() {

  // Top Nav Active Class
  $('.nav-item').each(function(){
    var thisPage = $('body').attr('name');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });


});