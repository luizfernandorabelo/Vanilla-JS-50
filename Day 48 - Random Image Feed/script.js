const BASE_URL = 'https://source.unsplash.com/random';
const MAX_IMAGE_ID = 5000;
const MAX_APPEARANCE_DELAY_IN_MS = 2000; 
const IMAGES_PER_PAGE = 60;

const containerDiv = document.getElementById('container');

function generateRandomImages() {
  for (let i = 1; i <= IMAGES_PER_PAGE; i++) {
    const img = document.createElement('img');
    img.style.backgroundColor = `#ffffff`;
    const randomDelay = parseInt(Math.random() * MAX_APPEARANCE_DELAY_IN_MS);
    setTimeout(() => {
      const randomID = parseInt(Math.random() * MAX_IMAGE_ID);
      img.src = `${BASE_URL}/${randomID}`;
    }, randomDelay);
    containerDiv.appendChild(img);
  }
}

generateRandomImages();
