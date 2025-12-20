// Read More Button
const btn = document.getElementById('read-more-button');
const moreText = document.getElementById('more-text');

btn.addEventListener('click', () => {
moreText.classList.toggle('show');
btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});

// Dynamic age
const startYear = 2008;
const currentYear = new Date().getFullYear();

const years = currentYear - startYear;
document.getElementById("years").textContent = years;