const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  } else if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].style.display = 'none';
  }
  slider.children[slideIndex].style.display = 'block';
}

prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

updateSlider(); // Initialize the slider
