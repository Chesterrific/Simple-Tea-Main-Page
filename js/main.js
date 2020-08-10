// Main jQuery
$(document).ready(function () {
  //* ----------------Navbar JS---------------- */
  $(window).bind('scroll', function () {
    
  });

  // Hamburger menu toggle open/close
  $('#menu').click(function () {
		$(this).toggleClass('open');
  });

  // Showcase slideshow
  var timeBetweenImages = 4500;
  var imgCounter = 0;
  var slideShow = $('#aboutShowcaseSlideshow');

  slideShow.children().fadeOut("fast");

  fadeImageIn();

  setInterval(function () {
    slideShow.children().eq(imgCounter).fadeOut('slow');
    imgCounter++;

    setTimeout(function () {
      fadeImageIn();
    }, 550);
  }, timeBetweenImages);

  function fadeImageIn() {
    if(imgCounter == slideShow.children().length){
      imgCounter = 0;
    }
    
    slideShow.children().eq(imgCounter).fadeIn('slow');
  }
});