// Main jQuery

$(document).ready(function () {
  /* ----------------Navbar JS---------------- */
  // Scrolling changes for logo and menu
  let logo = $('#logo');
  let menu = $('#menu span');

  let navOpen = false;
  let menuMid = menu.offset().top + menu.height() / 2;
  let missionTop = $(document).height();
  let transitionPresent = false;
  if ($('#transition').length) {
    transitionPresent = true;
    missionTop = $('#transition').offset().top;
  } else {
    transitionPresent = false;
    menu.css('background', 'black');
    logo.css('color', 'black');
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
    menuMid = menu.offset().top + menu.height() / 2;

    if (menuMid < missionTop && transitionPresent) {
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
  $('#menu, #overlay').click(function () {
    $('#menu').toggleClass('open');
    $('#menu-nav').toggleClass('open');


    // Toggle navOpen, first click makes it true.
    navOpen = !navOpen;

    if (navOpen) {
      menu.css('background', 'black');
      logo.css('color', 'black');
      $('#overlay').toggleClass('open');
    } else {
      $('#overlay').toggleClass('open');

      if (menuMid < missionTop && transitionPresent) {
        menu.css('background', 'white');
        logo.css('color', 'white');
      } else {
        menu.css('background', 'black');
        logo.css('color', 'black');
      }
    }
  });

  /* ----------------Showcase JS---------------- */
  let timeBetweenImages = 4500;
  let slow = 100;

  // If there's an element with class slideshow on the page.
  if ($('.slideshow').length) {
    $('.slideshow').each(function (i) {
      startShow($(this));
    });
  }

  function startShow(slideShow) {
    let imgCounter = slideShow.children().length - 1;

    // Fade in initial image.
    slideShow.children().eq(imgCounter).css('opacity', '1');

    setInterval(function () {
      // Fade out image.
      slideShow.children().eq(imgCounter).css('opacity', '0');
      imgCounter++;

      //Set timeout before fading next image in.
      setTimeout(function () {
        fadeImageIn();
      }, slow);

      // Time before current image fades out. i.e. how long current image stays on screen.
    }, timeBetweenImages);

    function fadeImageIn() {
      if (imgCounter >= slideShow.children().length) {
        imgCounter = 0;
      }

      slideShow.children().eq(imgCounter).css('opacity', '1');
    }
  }

  // //  If there's an element with class bgslideshow on the page.
  // if ($('.bgslideshow').length) {
  //   doSlideshow();
  // }

  // function doSlideshow() {
  //   let imgCounter = bgImages.length - 1;

  //   $('#shopPage')
  //     .css('opacity', 1);

  //   setInterval(function () {
  //     // Fade out image.
  //     $('#shopPage')
  //       .css('opacity', 0);
  //     imgCounter++;

  //     //Set timeout before fading next image in.
  //     setTimeout(function () {
  //       fadeImageIn();
  //     }, slow);

  //     // Time before current image fades out. i.e. how long current image stays on screen.
  //   }, timeBetweenImages);

  //   function fadeImageIn() {
  //     if (nextimage >= bgImages.length) {
  //       nextimage = 0;
  //     }

  //     $('#shopPage')
  //       .css({
  //         'background-image': ' linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)) ,url("' + bgImages[nextimage++] + '")',
  //         'opacity': 1
  //       })
  //   }
  // }

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
  if ($('#cursor').length) {
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

    $('.items').hover(function (mousePos) {
      console.log(mousePos.clientX);
    });

    // Cursor size changes
    $('#menu, nav ul li a, #logo, #scroll, #main-shop-links a, a').hover(function () {
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
  }
});