let currentIndex = 0;
const gallery = document.getElementById('imageGallery');
const pointsContainer = document.getElementById('pointsContainer');
let intervalId;

function showImage(index) {
    gallery.style.transform = `translateX(${-index * 100}%)`;
    updatePoints();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % gallery.children.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + gallery.children.length) % gallery.children.length;
    showImage(currentIndex);
}

function updatePoints() {
    pointsContainer.innerHTML = '';
    for (let i = 0; i < gallery.children.length; i++) {
        const point = document.createElement('div');
        point.className = 'point';
        point.addEventListener('click', () => goToImage(i));
        if (i === currentIndex) {
            point.classList.add('active');
        }
        pointsContainer.appendChild(point);
    }
}

function goToImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

function startGallery() {
    intervalId = setInterval(() => {
        nextImage();
    }, 3000);
}

function resetInterval() {
    clearInterval(intervalId);
    startGallery();
}

updatePoints();
startGallery();