// 🚀 ScrollReveal Animations Initialization

ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1500,
  delay: 100,
});

// Reveal Hero Section
ScrollReveal().reveal('#hero', { 
  origin: 'top',
  easing: 'ease-in-out',
});

// Reveal About Me Section
ScrollReveal().reveal('#about', { 
  origin: 'bottom',
  delay: 200,
});

// Reveal Skills Section
ScrollReveal().reveal('#skills', { 
  origin: 'left',
  delay: 300,
  interval: 100
});

// Reveal Skills Bars Individually
ScrollReveal().reveal('#skillsList div', { 
  origin: 'right',
  interval: 150,
});

// Reveal Timeline Section
ScrollReveal().reveal('#timeline', { 
  origin: 'bottom',
  delay: 400,
});

// Reveal Interests Section
ScrollReveal().reveal('#interests', { 
  origin: 'top',
  delay: 300,
});

// Reveal Footer
ScrollReveal().reveal('footer', { 
  origin: 'bottom',
  delay: 500,
});
