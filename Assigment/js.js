const images = document.querySelectorAll('.divSlineShow img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

leftArrow.addEventListener('click', showPreviousImage);
rightArrow.addEventListener('click', showNextImage);