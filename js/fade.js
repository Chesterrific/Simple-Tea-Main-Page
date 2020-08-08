$(document).ready(function () {

  var timeBetweenImages = 4500;
  var imgCounter = 0;
  var slideShow = $('#aboutShowcaseSlideshow');

  slideShow.children().fadeOut("fast")

  setInterval(function () {

   setTimeout(function () {
    fadeImageIn()
   }, 550);

  }, timeBetweenImages);

  function fadeImageIn(){
    slideShow.children().eq(imgCounter).fadeIn('slow');
    imgCounter++;

    if(imgCounter > slideShow.children().length)
    imgCounter = 0;
  }
});