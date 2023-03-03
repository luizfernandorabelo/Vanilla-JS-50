const MAX_BLUR = 30;

const passwordInput = document.querySelector('#password');
const backgroundDiv = document.querySelector('#background');

passwordInput.addEventListener('input', () => {
  let blurAmount = (MAX_BLUR - MAX_BLUR / 8 * passwordInput.value.length);
  blurAmount = blurAmount >= 0 ? blurAmount : 0;
  backgroundDiv.style.filter = `blur(${blurAmount}px)`;
  console.log(blurAmount);
});
