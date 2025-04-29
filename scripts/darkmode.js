// 🚀 Dark Mode Toggle Logic

const darkToggle = document.createElement('button');
darkToggle.innerText = '🌙';
darkToggle.className = 'fixed bottom-5 right-5 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 z-50';
document.body.appendChild(darkToggle);

// Initial Theme Check
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    swapHeroBackground('dark');
} else {
    swapHeroBackground('light');
}

// Toggle Click Event
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        swapHeroBackground('dark');
    } else {
        localStorage.setItem('theme', 'light');
        swapHeroBackground('light');
    }
});

// Swap Hero Background
function swapHeroBackground(mode) {
    const heroBg = document.getElementById('heroBackground');
    if (!heroBg) return;

    if (mode === 'dark') {
        heroBg.src = 'assets/images/hero-dark.jpg';
    } else {
        heroBg.src = 'assets/images/hero1.jpg';
    }
}

// Dark Mode Styles Applied Dynamically
const darkStyles = `
  body.dark {
    background-color: #0f172a;
    color: #e2e8f0;
  }
  body.dark section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 1rem;
  }
  body.dark footer {
    background: #1e293b;
    color: #94a3b8;
  }
  body.dark aside {
    background: linear-gradient(to bottom, #0f172a, #1e293b);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = darkStyles;
document.head.appendChild(styleSheet);
