// Load Profile Data
document.addEventListener('DOMContentLoaded', () => {
    const profile = JSON.parse(localStorage.getItem('portfolioProfile')) || defaultProfile;
    renderProfile(profile);
    renderTimeline(profile.experience);
});

// Dynamic Content Rendering
function renderProfile(data) {
    document.getElementById('userName').textContent = data.name;
    document.getElementById('userBio').textContent = data.bio;
    
    // Skills Matrix
    const skillsHTML = data.skills.map(skill => `
        <div class="skill-card p-4 bg-gray-800 rounded-lg">
            <div class="flex justify-between mb-2">
                <span>${skill.name}</span>
                <span class="text-emerald-400">${skill.category}</span>
            </div>
            <div class="skill-bar bg-gray-700 rounded-full">
                <div class="skill-progress h-full rounded-full" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
    document.getElementById('skillsGrid').innerHTML = skillsHTML;
}

// Timeline Expansion
function renderTimeline(experiences) {
    const timelineHTML = experiences.map(exp => `
        <div class="timeline-card bg-gray-800 p-6 rounded-xl relative">
            <h3 class="text-2xl font-bold text-emerald-400">${exp.year}</h3>
            <p class="text-lg mt-2">${exp.summary}</p>
            <button class="text-cyan-400 mt-4 know-more-btn" data-details="${exp.details}">
                Know More →
            </button>
            <div class="details-panel hidden mt-4 p-4 bg-gray-700 rounded-lg"></div>
        </div>
    `).join('');
    document.getElementById('timeline').innerHTML = timelineHTML;

    // Add Expand Functionality
    document.querySelectorAll('.know-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const detailsPanel = this.nextElementSibling;
            detailsPanel.innerHTML = this.dataset.details;
            detailsPanel.classList.toggle('hidden');
        });
    });
}