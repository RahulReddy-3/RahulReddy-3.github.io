// 🎵 Dynamic Typing Animation for Interests (with typing + deleting effect)

const interests = ["⚽ Football", "🎵 Music", "📸 Photography", "💻 Coding"];
let interestIndex = 0;
let charIndex = 0;
let isDeleting = false;
const interestElement = document.getElementById('dynamicInterest');

function typeInterests() {
  if (!interestElement) return; // Safety check

  const currentInterest = interests[interestIndex % interests.length];

  if (isDeleting) {
    interestElement.textContent = currentInterest.substring(0, charIndex--);
  } else {
    interestElement.textContent = currentInterest.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 60 : 120; // Typing speed based on action

  if (!isDeleting && charIndex === currentInterest.length) {
    // Pause after complete typing
    isDeleting = true;
    typingSpeed = 1200;
  } else if (isDeleting && charIndex === 0) {
    // Pause before next interest
    isDeleting = false;
    interestIndex++;
    typingSpeed = 500;
  }

  setTimeout(typeInterests, typingSpeed);
}

// Start Typing after page load
document.addEventListener('DOMContentLoaded', typeInterests);
