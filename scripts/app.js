// app.js

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
});

// Animate Skill Bars when in View
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.skill-progress');
      const targetWidth = progress.getAttribute('data-skill');
      progress.style.width = targetWidth;
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill').forEach(skill => {
  skillObserver.observe(skill);
});

// Timeline Expand/Collapse
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.more-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.previousElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'More →';
      } else {
        content.style.display = 'block';
        button.textContent = 'Less ←';
      }
    });
  });
});
