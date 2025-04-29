// 🎵 Dynamic Typing Animation for Interests

const interests = ["⚽ Football ", "🎵 Music ", "📸 Photography ", "💻 Coding "];
let interestIndex = 0;
const dynamicInterest = document.getElementById('dynamicInterest');

function typeInterest() {
  dynamicInterest.textContent = interests[interestIndex];
  interestIndex = (interestIndex + 1) % interests.length;
}

// Slow it to every 4 seconds
setInterval(typeInterest, 4000); 

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
