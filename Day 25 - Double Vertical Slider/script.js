const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');

const slidesCount = rightSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex = (activeSlideIndex + 1) % slidesCount;
  } else if (direction === 'down') {
    activeSlideIndex = (slidesCount + activeSlideIndex - 1) % slidesCount;
  }
  rightSlide.style.transform = `translateY(${-activeSlideIndex * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
