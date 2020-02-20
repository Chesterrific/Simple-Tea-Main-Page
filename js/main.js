// Variables
var body = document.body;
var navOpenBtn = document.getElementById("hamburger");
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