"use strict";

// Set current year in foote copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// NAV Bar
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(event) {
  if (window.scrollY > 0) {
    headerEl.classList.add('header-scroll');
  } else {
    headerEl.classList.remove('header-scroll');
  }
});

// Mobile Nav
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// NavBar Scrolling 
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // close mobal navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

 // animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

