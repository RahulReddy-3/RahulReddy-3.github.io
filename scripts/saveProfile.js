// saveProfile.js

document.addEventListener('DOMContentLoaded', function () {
    const storedName = localStorage.getItem('fullName');
    const storedDesignation = localStorage.getItem('designation');
    const storedPhone = localStorage.getItem('phoneNumber');
    const storedEmail = localStorage.getItem('email');
    const storedLocation = localStorage.getItem('location');

    if (storedName) document.getElementById('fullName').textContent = storedName;
    if (storedDesignation) document.getElementById('designation').textContent = storedDesignation;
    if (storedPhone) document.getElementById('phoneNumber').textContent = storedPhone;
    if (storedEmail) document.getElementById('email').textContent = storedEmail;
    if (storedLocation) document.getElementById('location').textContent = storedLocation;
});
