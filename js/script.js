
$(document).ready(function(){
  // smooth scrolling
  $(".btn-down").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
    $(window).scroll(function () {
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > $('.top').height()) {
      $('.friends').addClass('right');
      $('.foosball').addClass('left');
     $('.middle').addClass('up');
    }
  });  

});
