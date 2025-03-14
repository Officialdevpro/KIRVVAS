const text = "KRIVVAS  2025";
const container = document.getElementById("text");

function animateText() {
  // Clear previous text
  container.innerHTML = "";

  // Split the text into spans
  text.split("").forEach((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter === " " ? "&nbsp;" : letter; // Ensure space is visible
    span.classList.add("letter");
    container.appendChild(span);
  });

  // GSAP Animation
  gsap.fromTo(
    ".letter",
    { opacity: 0, y: 50, scale: 0.5, rotation: 50 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
      onComplete: celebrate,
    }
  );
}

function celebrate() {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  document.querySelector(".text-container").classList.add("move");
  document.querySelector(".body").classList.add("ch-style");
  // document.querySelector(".events-container").style.display = "block";
  document.querySelector(".slider-container").style.display = "block";
}

document.querySelector(".text-container").classList.add("move");
document.querySelector(".body").classList.add("ch-style");
// document.querySelector(".events-container").style.display = "block";
document.querySelector(".slider-container").style.display = "block";

// Initial call
// animateText();
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);
// Repeat every 10 seconds
// setInterval(animateText, 6000);

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".fullscreen-menu");
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
}
