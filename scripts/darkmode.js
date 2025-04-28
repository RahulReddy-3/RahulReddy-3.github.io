// darkmode.js

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggle.textContent = "☀️"; // Light mode
  } else {
    themeToggle.textContent = "🌙"; // Dark mode
  }
});
