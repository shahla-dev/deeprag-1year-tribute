const bgMusic = document.getElementById("bgMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");

// Unmute & play on first click anywhere
document.addEventListener("click", () => {
  bgMusic.muted = false;
  bgMusic.play();
}, { once: true });

// Toggle music play/pause on button click
musicToggleBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggleBtn.textContent = "⏸️ Pause Music";
  } else {
    bgMusic.pause();
    musicToggleBtn.textContent = "▶️ Play Music";
  }
});


// ------intro-screen----------
const introLines = [
  "1 Year of Deeprag",
  "365 Days",
  "8760 Hours",
  "525600 Minutes",
  "31536000 Seconds",
  "💖 Welcome to the World of Deeprag 💖"
];

const introText = document.getElementById("intro-text");
const introScreen = document.querySelector(".intro-screen");
const mainContent = document.querySelector(".main-content");

let currentLine = 0;

function showNextLine() {
  if (currentLine < introLines.length) {
    introText.textContent = introLines[currentLine];
    introText.style.animation = "none"; // reset animation
    void introText.offsetWidth; // force reflow
    introText.style.animation = "fadeInOut 2s ease-in-out forwards";

    let delay = (currentLine === introLines.length - 1) ? 3000 : 2200;
    
    currentLine++;
    setTimeout(showNextLine, delay);

  } else {
    // All lines done → fade out intro
    introScreen.style.transition = "opacity 1.5s ease";
    introScreen.style.opacity = 0;

    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.style.display = "block";

      // Play background music
      if (bgMusic) {
        bgMusic.muted = false;
        bgMusic.play().catch(() => { });
      }
    }, 1500);
  }
}

window.addEventListener("load", showNextLine);


const heartContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 3 + "s";
  heart.style.background = ["#ff6b81", "#ff85a2", "#e75480", "#ff1493", "#f08080"][Math.floor(Math.random() * 5)];

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 400);

//-------------- image gallery
const scrollAmount = 280 + 30; // image width + gap = 310px

function scrollGallery(direction) {
  const container = document.getElementById("scroll-container");
  const scrollAmount = 300; // adjust to match image width + gap
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}


// ------------- flower container
const flowerContainer = document.querySelector(".flower-container");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Position
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (3 + Math.random() * 4) + "s";
  flower.style.opacity = Math.random() * 0.9 + 0.1;

  // Pretty flower colors
  const colors = ["#ff69b4", "#ffc0cb", "#ffb6c1", "#ffa07a", "#f8b195", "#f9c5d1", "#fff0f5", "#fddde6"];
  flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Size variation
  const size = Math.random() * 10 + 10;
  flower.style.width = size + "px";
  flower.style.height = size + "px";

  flowerContainer.appendChild(flower);

  // Remove after falling
  setTimeout(() => {
    flower.remove();
  }, 8000);
}

// Continuous flower rain
setInterval(createFlower, 200);


