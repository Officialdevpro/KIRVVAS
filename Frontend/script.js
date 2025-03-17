const eventDate = new Date("2025-04-10T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft > 0) {
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");
  } else {
    document.querySelector(".countdown-container h2").innerText =
      "EVENT STARTED!";
    document.querySelector(".countdown").style.display = "none";
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);

let hamMenus = document.querySelectorAll(".ham-menu");
hamMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    document.querySelectorAll(".nav-ham").forEach((nav) => {
      nav.classList.remove("visible");
    });
  });
});


const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const navHam = document.querySelectorAll(".nav-ham");

open_btn.addEventListener("click", () => {
  console.log("btn clicked");
  navHam.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  console.log("bnt again clidk");
  navHam.forEach((nav_el) => nav_el.classList.remove("visible"));
});