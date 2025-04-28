// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggle.textContent = "☀️"; // Light icon
    } else {
        themeToggle.textContent = "🌙"; // Dark icon
    }
});
