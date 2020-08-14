// Main jQuery

$(document).ready(function () {
  /* ----------------Navbar JS---------------- */
  // Scrolling changes for logo and menu
  let logo = $('#logo');
  let menu = $('#menu span');
  let logoMid = logo.offset().top + logo.height() / 2;

  let missionTop = $(document).height();
  if ($('#transition').length) {
    missionTop = $('#transition').offset().top;
  }

  let navOpen = false;

  //Set overlay height to document height.
  $('#overlay').css('height', $(document).height() + 'px',);

  $(window).bind('scroll', function () {
    logoMid = $('#logo').offset().top + $('#logo').height() / 2;

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
      menu.css('background', 'black');
      logo.css('color', 'black');
      $('#overlay').toggleClass('open');
    } else {
      $('#overlay').toggleClass('open');

      if (logoMid < missionTop) {
        menu.css('background', 'white');
        logo.css('color', 'white');
      } else {
        menu.css('background', 'black');
        logo.css('color', 'black');
      }
    }
  });

  /* ----------------Showcase JS---------------- */
  // Showcase slideshow
  let timeBetweenImages = 4500;
  let slideShow = $('#aboutShowcaseSlideshow');
  let imgCounter = slideShow.children().length - 1;
  let slow = 600;

  // Fade out every image behind the top most image
  for (var i = 0; i < slideShow.children().length - 1; i++) {
    slideShow.children().eq(i).fadeOut('fast');
  }

  setInterval(function () {
    slideShow.children().eq(imgCounter).fadeOut(slow);
    imgCounter++;

    setTimeout(function () {
      fadeImageIn();
    }, slow);
  }, timeBetweenImages);


  function fadeImageIn() {
    if (imgCounter >= slideShow.children().length) {
      imgCounter = 0;
    }

    slideShow.children().eq(imgCounter).fadeIn(slow);
  }

  /* ----------------Scroll JS---------------- */
  let scrollSpeed = 750;

  if ($('#scroll').length) {
    $('#scroll').click(function () {
      $('html, body').animate({
        scrollTop: $('#transition').offset().top
      }, scrollSpeed);
    });
  }
});