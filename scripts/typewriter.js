// 🎵 Dynamic Typing Animation for Interests

const interests = [
  "⚽ Football Enthusiast",
  "🎵 I am a Passionate Singer",
  "📸 Into Photography",
  "📚 Jack of all Trades",
  "💻 Data Engineer at Heart"
];

let interestIndex = 0;
let charIndex = 0;
let currentInterest = '';
let isDeleting = false;
const interestElement = document.getElementById('dynamicInterest');

function typeInterests() {
  if (interestIndex >= interests.length) {
    interestIndex = 0;
  }

  currentInterest = interests[interestIndex];

  if (isDeleting) {
    interestElement.innerText = currentInterest.substring(0, charIndex--);
  } else {
    interestElement.innerText = currentInterest.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentInterest.length) {
    isDeleting = true;
    setTimeout(typeInterests, 1200); // Pause after fully typed
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    interestIndex++;
    setTimeout(typeInterests, 400); // Pause before typing next
  } else {
    setTimeout(typeInterests, isDeleting ? 50 : 100);
  }
}

// Start Typing Effect after DOM Content is loaded
document.addEventListener('DOMContentLoaded', typeInterests);
