// Main jQuery

$(document).ready(function () {
  /* ----------------Navbar JS---------------- */
  // Scrolling changes for logo and menu
  let logo = $('#logo');
  let menu = $('#menu span');

  let navOpen = false;
  let logoMid = logo.offset().top + logo.height() / 2;
  let missionTop = $(document).height();
  if ($('#transition').length) {
    missionTop = $('#transition').offset().top;
  }

  //Set overlay height to document height.
  $('#overlay').css('height', $(document).height() + 'px',);

  // Recalculate positions and sizes on window resize.
  $(window).resize(function () {
    if ($('#transition').length) {
      missionTop = $('#transition').offset().top;
    }
    $('#overlay').css('height', $(document).height() + 'px',);
  });

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
  // let href = location.pathname.split('/').slice(-1)[0];

  if ($('.slideshow').length) {
    $('.slideshow').each(function (i) {
      startShow($(this));
    });
  }

  function startShow(slideShow) {

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

  let radius = 30;

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
  $('#menu, #menu-nav ul li a, #logo, #scroll, a').hover(function () {
    expandMouse();

  }, function () {
    resetMouseSize();
  });

  function expandMouse() {
    $('#cursor').css({
      'height': '100px',
      'width': '100px'
    });
  }

  function resetMouseSize() {
    $('#cursor').css({
      'height': radius + 'px',
      'width': radius + 'px'
    });
  }
});