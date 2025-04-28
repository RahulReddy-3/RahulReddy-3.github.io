// typewriter.js

const interests = [
  "⚽ Football",
  "🎵 Singing",
  "🎧 Music",
  "📷 Photography",
  "🚀 Learning New Technologies"
];

let index = 0;
let interestText = document.getElementById('dynamicInterest');

function updateInterest() {
  interestText.textContent = interests[index];
  index = (index + 1) % interests.length;
}

setInterval(updateInterest, 3000);
