// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Read More Button
const btn = document.getElementById('read-more-button');
const moreText = document.getElementById('more-text');

btn.addEventListener('click', () => {
moreText.classList.toggle('show');
btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});

// Dynamic age
const birthDate = new Date(2008, 5, 27);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const hasHadBirthday = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

if (!hasHadBirthday) {
    age--;
}

document.getElementById("years").textContent = age;