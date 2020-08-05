$(document).ready(function () {

  // Variables
  var isWhite = true,
    logo = document.getElementById('logo'),
    transitionEl = document.getElementById('transition');

  $(window).bind('scroll', function () {
    // Mission section's distance from top of window starting from its top.
    var topOfMission = transitionEl.offsetTop;

    // Mission section's distance from the top of window startinf from it's bottom.
    var botOfMission = transitionEl.offsetTop + transitionEl.offsetHeight;

    // Logo's distance from the top of window + half its height.
    var topOfLogo = window.scrollY + (logo.offsetTop + logo.offsetHeight / 2);

    if (topOfLogo >= topOfMission && isWhite == true) {
      $('#logo').css('color', 'black');
      isWhite = false;
    }
    else if (!(topOfLogo >= topOfMission) && isWhite == false){
      $('#logo').css('color', 'white');
      isWhite = true;
    }
  });
});