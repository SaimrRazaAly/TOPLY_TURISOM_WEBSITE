// all the ids are been searhed here
let navbar = document.querySelector("#navbar");
let navList = document.querySelector("#nav-List");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let bar = document.querySelector("#bar");
let close = document.querySelector("#close");

// all the classis are been searched here
let navLinks = document.querySelector(".nav-links");
let headSearch = document.querySelector(".head-search");
let modeColor = document.querySelectorAll(".modecolor");

// let mIcon = document.querySelector(".m-icon");

// funtion for header when scrol down
window.onscroll = () => {
  if (window.scrollY > 100 && moon.style.display == "none") {
    navbar.style.background = "hsl(0, 0%, 100%)";
    // mIcon.classList.remove('white-icon')
    navbar.classList.add("Onscroll");
  }
  // when dark mode is acvtive
  else if (window.scrollY > 100 && moon.style.display == "block") {
    navbar.style.background = "hsl(0, 0%, 0%)";
    // mIcon.classList.add('white-icon')
    navbar.classList.add("Onscroll");
    navbar.classList.add("Onscrolling-icons");
    modeColor.forEach((element) => {
      element.classList.add("hColorWhite");
    });
  }
  // ehen user has not scrolled
  else {
    navbar.style.background = "transparent";
    navbar.classList.remove("Onscroll");
    navbar.classList.remove("Onscrolling-icons");
    navbar.style.color = "hsl(0, 0%, 100%)";
  }
};

// adding dark mode to the website
sun.onclick = () => {
  document.body.style.background = "hsl(0, 0%, 0%)";
  moon.style.display = "block";
  sun.style.display = "none";
  destinationText.style.color = "hsl(0, 0%, 100%)";
  modeColor.forEach((element) => {
    element.style.color = "white";
  });
};
// hen user click on
moon.onclick = () => {
  document.body.style.background = "hsl(0, 0%, 100%)";
  moon.style.display = "none";
  sun.style.display = "block";
  modeColor.forEach((element) => {
    element.style.color = "black";
  });
};

bar.onclick = () => {
  navLinks.classList.add("sider-bar");
};
close.onclick = () => {
  navLinks.classList.remove("sider-bar");
};
