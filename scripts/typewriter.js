// typewriter.js

const interests = [
  "🎵 I love Singing",
  "⚽ Lucky to have played Football",
  "📊 Technical Data Enthusiast",
  "🚀 I build efficient Cloud Solutions"
];

let currentInterest = 0;
const interestText = document.getElementById('dynamicInterest');

function rotateInterest() {
  interestText.textContent = interests[currentInterest];
  currentInterest = (currentInterest + 1) % interests.length;
}

setInterval(rotateInterest, 3000);
rotateInterest();
