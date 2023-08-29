const slideshowContainer = document.querySelector('.slideshow-container');
const images = slideshowContainer.querySelectorAll('img');
let currentImageIndex = 0;

function showImage(index) {
  images[currentImageIndex].style.display = 'none';
  images[index].style.display = 'block';
  currentImageIndex = index;
}

function nextImage() {
  let nextIndex = (currentImageIndex + 1) % images.length;
  showImage(nextIndex);
}

// Start the slideshow
showImage(currentImageIndex);
setInterval(nextImage, 2000);
