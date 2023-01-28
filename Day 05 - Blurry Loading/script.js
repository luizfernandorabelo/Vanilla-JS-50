document.addEventListener('DOMContentLoaded', () => {
  
  const backgroundImage = document.querySelector('#background-image');
  const loadingText = document.querySelector('#loading-text');
  
  const BLURRING_DELAY_MS = 22;
  
  let currentLoad = 0;
  let myInterval = setInterval(applyBlurring, BLURRING_DELAY_MS);

  
  function applyBlurring() {

    currentLoad += 1;

    if (currentLoad > 99) {
      clearInterval(myInterval);
      loadingText.remove();
    }

    loadingText.innerHTML = `${currentLoad}%`
    loadingText.style.opacity = (100 - currentLoad) / 100 + 0.3;
    backgroundImage.style.filter = `blur(${(100 - currentLoad) / 2}px)`;
  }

});
