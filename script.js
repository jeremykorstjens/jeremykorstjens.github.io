$(document).ready(function(){
  // smooth scrolling
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      var hash = this.hash;
      console.log(hash);
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
    $(window).scroll(function () {
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 400) {
      $('#slidein').removeClass('hide');
      $('#slidein').addClass('slidein');
      $('#fade').removeClass('hide');
      $('#fade').addClass('show');
    }
  });  
  
  
  
  
});