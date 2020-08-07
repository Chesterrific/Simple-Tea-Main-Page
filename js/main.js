// Variables
var body = document.body;
var navOpenBtn = document.getElementById("openBtn");
var navCloseBtn = document.getElementById("closeBtn");
var menu = document.getElementById("menu");

//JS Media Queries
var maxNavCond = window.matchMedia("(max-width: 991px)");

// Navbar functions
function openNav() {
  body.style.overflow = "hidden";

  if (maxNavCond.matches) {
    menu.style.width = "100%";
  } else {
    menu.style.width = "20%";
  }
}

function closeNav() {
  body.style.overflow = "visible";
  menu.style.width = "0%";
}

// Event Listeners
navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);


// Test for different fonts for Danny

var main = document.getElementsByTagName('main')[0];

// Roboto
document.getElementById('test1').addEventListener('click', function() {
  console.log('changing font to Roboto');
  main.style.fontFamily = "Roboto, sans-serif";
});

// Nunito
document.getElementById('test2').addEventListener('click', function() {
  console.log('changing font to Nunito');
  main.style.fontFamily = "Nunito Sans, sans-serif";
});

// Calibri Light
document.getElementById('test3').addEventListener('click', function() {
  console.log('changing font to Calibri Light');
  main.style.fontFamily = "Calibri Light, sans-serif";
});


// Calibri
document.getElementById('test4').addEventListener('click', function() {
  console.log('changing font to Calibri');
  main.style.fontFamily = "Calibri, sans-serif";
});