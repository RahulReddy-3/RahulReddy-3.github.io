// Scroll Progress Bar
window.onscroll = function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Animate Skill Progress Bars on scroll
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.skill-progress');
            progress.style.width = progress.getAttribute('style').replace('width: 0', 'width: ' + progress.style.width);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill').forEach(skill => {
    skillObserver.observe(skill);
});
