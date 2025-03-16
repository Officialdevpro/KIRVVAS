const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Set event start date (YYYY, MM-1, DD, HH, MM, SS)
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





const hero = document.querySelector(".hero");

// Array of images
const images = [
"../Frontend/assets/images/2T0A4377-min.jpg",
"../Frontend/assets/images/8L7A4741-min.jpg",
"../Frontend/assets/images/8L7A4780-min.jpg",
"../Frontend/assets/images/bg2-min.jpg",

];

let index = 0;

function changeBackground() {
index = (index + 1) % images.length; // Loop through images
hero.style.backgroundImage = `url(${images[index]})`;
}

// Change image every 5 seconds
setInterval(changeBackground, 3000);



let slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showNextSlide() {
            let previousSlide = currentSlide;
            currentSlide = (currentSlide + 1) % slides.length;

            gsap.timeline()
                .to(slides[previousSlide], { opacity: 0, y: currentSlide === 1 ? -100 : 100, duration: 1.2, ease: 'power2.inOut' })
                .set(slides[previousSlide], { opacity: 0, x: 100 })
                .fromTo(
                    slides[currentSlide],
                    { opacity: 0, x: currentSlide === 0 ? -100 : currentSlide === 1 ? 0 : 100, y: currentSlide === 1 ? -100 : 100 },
                    { opacity: 1, x: 0, y: 0, duration: 1.5, ease: 'expo.out' }
                );
        }

        gsap.set(slides[0], { opacity: 1, x: 0 });
        setInterval(showNextSlide, 5000);