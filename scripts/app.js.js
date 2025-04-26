// Profile data initialization
let profileData = {
    // ... (existing profile data) ...
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    renderSkills();
    initAnimations();
    createBinaryRain();
});

function createBinaryRain() {
    const container = document.createElement('div');
    container.className = 'binary-rain';
    
    for(let i = 0; i < 50; i++) {
        const digit = document.createElement('div');
        digit.className = 'binary-digit';
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
        digit.style.left = `${Math.random() * 100}%`;
        digit.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(digit);
    }
    
    document.body.appendChild(container);
}

// ... (keep other existing functions) ...

// Add animation to skill bars on load
function initAnimations() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.classList.add('skill-bar-animate');
    });
    
    ScrollReveal().reveal('.skill-card', {
        delay: 200,
        interval: 100,
        reset: true
    });
}