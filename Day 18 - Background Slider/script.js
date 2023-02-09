const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left-arrow');
const rightBtn = document.querySelector('#right-arrow');

let activeSlide = 0;

function applyNewBackground() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  slides[activeSlide].classList.add('active');
}

leftBtn.addEventListener('click', () => {
  slides[activeSlide].classList.remove('active');
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  applyNewBackground();
});

rightBtn.addEventListener('click', () => {
  slides[activeSlide].classList.remove('active');
  activeSlide = (activeSlide + 1) % slides.length;
  applyNewBackground();
});

applyNewBackground();
