// Main jQuery

$(document).ready(function () {
  /* ----------------Navbar JS---------------- */
  // Scrolling changes for logo and menu
  let logo = $('#logo');
  let menu = $('#menu span');
  let missionTop = $('#transition').offset().top;
  let navOpen = false;

  //Set overlay height to document height.
  $('#overlay').css('height', $(document).height() + 'px',);

  $(window).bind('scroll', function () {
    let logoMid = $('#logo').offset().top + $('#logo').height() / 2;

    if (logoMid < missionTop) {
      if (!navOpen) {
        menu.css('background', 'white');
        logo.css('color', 'white');
      }
    } else {
      menu.css('background', 'black');
      logo.css('color', 'black');
    }
  });

  // Hamburger menu toggle open/close
  $('#menu').click(function () {
    $(this).toggleClass('open');
    $('#menu-nav').toggleClass('open');

    // Toggle navOpen, first click makes it true.
    navOpen = !navOpen;

    if (navOpen) {
      $('#menu span').css('background', 'black');
      $('#logo').css('color', 'black');
      $('#overlay').toggleClass('open');
    } else {
      $('#overlay').toggleClass('open');

      if (logoMid < missionTop) {
        $('#menu span').css('background', 'white');
        $('#logo').css('color', 'white');
      } else {
        $('#menu span').css('background', 'black');
        $('#logo').css('color', 'black');
      }
    }
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
    if (imgCounter == slideShow.children().length) {
      imgCounter = 0;
    }

    slideShow.children().eq(imgCounter).fadeIn('slow');
  }
});