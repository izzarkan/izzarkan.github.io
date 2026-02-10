const ACCESS_KEY = "I8MXoWZAsR0GmCc6UKHv_cN7V1uFQ-Gnt0cqvEiDR6E";

const gallery = document.getElementById("gallery");
const viewer = document.getElementById("fullscreen-viewer");
const viewerImg = document.getElementById("fullscreen-image");
const closeBtn = document.getElementById("close-btn");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let images = [];
let currentIndex = 0;

fetch("https://api.unsplash.com/users/eikosiefta/photos?per_page=12", {
headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
}
})
.then(res => res.json())
.then(data => {
images = data;
renderGallery();
});

function renderGallery() {
gallery.innerHTML = "";
images.forEach((img, index) => {
    const image = document.createElement("img");
    image.src = img.urls.small;
    image.classList.add("clickable-image");
    image.addEventListener("click", () => openFullscreen(index));
    gallery.appendChild(image);
});
}

function openFullscreen(index) {
    currentIndex = index;
    viewerImg.src = images[index].urls.regular;
    fetch(images[index].links.download_location, {
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
    }).catch( () => {});
    viewer.classList.add("show");
    document.body.classList.add("fullscreen-open");
}

function closeFullscreen() {
    viewer.classList.remove("show");
    document.body.classList.remove("fullscreen-open");
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    viewerImg.src = images[currentIndex].urls.regular;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImg.src = images[currentIndex].urls.regular;
}

closeBtn.addEventListener("click", closeFullscreen);
viewer.addEventListener("click", e => {
    if (e.target === viewer) closeFullscreen();
});

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

document.addEventListener("keydown", e => {
    if (!viewer.classList.contains("show")) return;
    if (e.key === "Escape") closeFullscreen();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});