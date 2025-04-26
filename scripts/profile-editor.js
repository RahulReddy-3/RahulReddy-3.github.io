// scripts/profile-editor.js
document.addEventListener('DOMContentLoaded', () => {
    loadFormData();
    
    document.getElementById('profileImage').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function() {
            localStorage.setItem('profileImage', reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });
});

function loadFormData() {
    const savedData = localStorage.getItem('portfolioProfile');
    if(savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('inputName').value = data.name || '';
        document.getElementById('inputBio').value = data.bio || '';
        document.getElementById('inputLocation').value = data.location || '';
        document.getElementById('inputSkills').value = JSON.stringify(data.skills, null, 2);
    }
}

function saveProfile() {
    const profileData = {
        name: document.getElementById('inputName').value,
        bio: document.getElementById('inputBio').value,
        location: document.getElementById('inputLocation').value,
        skills: JSON.parse(document.getElementById('inputSkills').value)
    };

    localStorage.setItem('portfolioProfile', JSON.stringify(profileData));
    window.location.href = 'index.html';
}