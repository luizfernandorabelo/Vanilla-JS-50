const imageContainer = document.querySelector('#image-container');
const imageElements = imageContainer.querySelectorAll('img');
const nextBtn = document.querySelector('#next-btn');
const previousBtn = document.querySelector('#previous-btn');

const IMG_WIDTH = 500;  // px

let activeImgIndex = 0;

let interval = setInterval(translateImages, 2000);

nextBtn.addEventListener('click', () => {
  clearInterval(interval);
  translateImages('forward');
  interval = setInterval(translateImages, 2000);
});

previousBtn.addEventListener('click', () => {
  clearInterval(interval);
  translateImages('backward');
  interval = setInterval(translateImages, 2000);
});

function translateImages(direction='forward') {
  if (direction === 'forward')
    activeImgIndex = (activeImgIndex + 1) % imageElements.length;
  else
    activeImgIndex = (activeImgIndex - 1 + imageElements.length) % imageElements.length;
  imageContainer.style.transform = `translateX(${-activeImgIndex * IMG_WIDTH}px)`;
}
