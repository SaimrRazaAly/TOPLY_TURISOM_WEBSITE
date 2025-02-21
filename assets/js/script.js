// Selecting all elements by their IDs
const navbar = document.querySelector("#navbar");
const navList = document.querySelector("#nav-List");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const bar = document.querySelector("#bar");
const close = document.querySelector("#close");

// Selecting all elements by their class names
const navLinks = document.querySelector(".nav-links");
const headSearch = document.querySelector(".head-search");
const modeColorElements = document.querySelectorAll(".modecolor");

// Function to handle header styles on scroll
window.onscroll = () => {
  const scrolledDown = window.scrollY > 100;

  if (scrolledDown && moon.style.display === "none") {
    // Light mode and scrolled
    navbar.style.background = "hsl(0, 0%, 100%)";
    navbar.classList.add("Onscroll");
  } else if (scrolledDown && moon.style.display === "block") {
    // Dark mode and scrolled
    navbar.style.background = "hsl(0, 0%, 0%)";
    navbar.classList.add("Onscroll");
    navbar.classList.add("Onscrolling-icons");

    modeColorElements.forEach((element) => {
      element.classList.add("hColorWhite");
    });
  } else {
    // User has not scrolled
    navbar.style.background = "transparent";
    navbar.classList.remove("Onscroll");
    navbar.classList.remove("Onscrolling-icons");
    navbar.style.color = "hsl(0, 0%, 100%)";
  }
};

// Adding dark mode to the website
sun.onclick = () => {
  document.body.style.background = "#121212";
  moon.style.display = "block";
  sun.style.display = "none";

  // Update text colors for dark mode
  modeColorElements.forEach((element) => {
    element.style.color = "white";
  });
};

// Switching back to light mode
moon.onclick = () => {
  document.body.style.background = "hsl(0, 0%, 100%)";
  moon.style.display = "none";
  sun.style.display = "block";

  // Update text colors for light mode
  modeColorElements.forEach((element) => {
    element.style.color = "black";
  });
};

// Opening the sidebar menu
bar.onclick = () => {
  navLinks.classList.add("sider-bar");
};

// Closing the sidebar menu
close.onclick = () => {
  navLinks.classList.remove("sider-bar");
};


// Wait until the page is fully loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0"; // Fade out the preloader
  preloader.style.transition = "opacity 0.5s ease"; // Smooth transition

  // Remove preloader from the DOM after the transition
  setTimeout(() => {
    preloader.style.display = "none";
  }, 5000); // Match the duration of the fade-out transition
});
