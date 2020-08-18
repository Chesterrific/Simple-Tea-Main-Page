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
  let href = location.pathname.split('/').slice(-1)[0];
  let slideShow = 'none';
  if (href == 'index.html') {
    slideShow = $('#aboutShowcaseSlideshow');
  } else if (href == 'customlabel.html') {
    slideShow = $('#customMissionSlideshow');
  }

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

  /* ----------------Cursor JS---------------- */
  let cursor = document.getElementById('cursor');
  let x = 0;
  let y = 0;
  let yscroll = 0;

  let height = 30
  let width = 30;

  // Cursor follow
  document.addEventListener('mousemove', function (mousePos) {
    x = mousePos.clientX;
    y = mousePos.clientY;
    yscroll = $(document).scrollTop();
    cursor.style.left = x + 'px';
    cursor.style.top = (y + yscroll) + 'px';
  });

  document.addEventListener('scroll', function () {
    yscroll = $(document).scrollTop();
    cursor.style.top = (y + yscroll) + 'px';
  });

  // Cursor size changes
  $('#menu, #menu-nav ul li a, #logo, #scroll').hover(function () {
    expandMouse();

  }, function () {
    resetMouseSize();
  });

  function expandMouse() {
    $('#cursor').css({
      '-webkit-animation': 'spin 5s linear infinite',
      '-moz-animation': 'spin 5s linear infinite',
      '-o-animation': 'spin 5s linear infinite',
      'animation': 'spin 5s linear infinite',
      'border': '2px dashed #7b7b7f',
      'height': '100px',
      'width': '100px'
    });
  }

  function resetMouseSize() {
    $('#cursor').css({
      '-webkit-animation': 'none',
      '-moz-animation': 'none',
      '-o-animation': 'none',
      'animation': 'none',
      'border': '2px solid #7b7b7f',
      'height': height + 'px',
      'width': width + 'px'
    });
  }

});