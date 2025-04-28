// Dynamic Interests Rotator
const interests = ["🎵 Singing", "⚽ Football", "🎧 Music Production", "📊 Data Enthusiast", "🚀 Cloud Solutions"];

let currentInterest = 0;
const interestText = document.getElementById("dynamicInterest");

function rotateInterest() {
    interestText.textContent = interests[currentInterest];
    currentInterest = (currentInterest + 1) % interests.length;
}

setInterval(rotateInterest, 3000); // change every 3 seconds
rotateInterest(); // initial call
