// Main jQuery

$(document).ready(function () {
  /* ----------------Navbar JS---------------- */
  // Scrolling changes for logo and menu
  let logo = document.getElementById('#logo');
  let menu = document.getElementById('#menu span');

  $(window).bind('scroll', function () {
    let topOfWelcome = $('#welcome').offset().top;
    let scrollCounter = $(window).scrollTop() - topOfWelcome;
    let topOfMission = $('#mission').offset().top;

    console.log(scrollCounter);

    if (scrollCounter < (topOfMission - 50)) {
      $('#logo').css('color', 'white');
      $('#menu span').css('background', 'white');
    } else {
      $('#logo').css('color', 'black');
      $('#menu span').css('background', 'black');
    }
  });

  // Hamburger menu toggle open/close
  $('#menu').click(function () {
		$(this).toggleClass('open');
  });

  /* ----------------Showcase JS---------------- */
  // Showcase slideshow
  let timeBetweenImages = 4500;
  let imgCounter = 0;
  let slideShow = $('#aboutShowcaseSlideshow');

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