"use strict";

function contactMessageInit() {
  var form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (eSubmit) {
    eSubmit.preventDefault();

    var submitButton = form.querySelector("button");
    submitButton.classList.add("sending");
    
      
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        submitButton.classList.remove("sending");
        submitButton.classList.add("thanks");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        submitButton.classList.add("error");
      }
    }).catch((error) => {
      console.log(error);
      submitButton.classList.add("error");
    }).then(function () {
      form.reset();
      setTimeout(() => {
        submitButton.classList.remove("thanks");
        submitButton.classList.remove("error");
      }, 5000);
    });
});
}

document.addEventListener("DOMContentLoaded", function () {
  contactMessageInit();
});

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

