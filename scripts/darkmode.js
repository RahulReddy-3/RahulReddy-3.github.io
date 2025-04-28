// darkmode.js

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

// Optional: Attach to a button if you want (currently auto based on OS setting)
// Example if you later add a button: document.getElementById("darkModeToggle").addEventListener('click', toggleDarkMode);
