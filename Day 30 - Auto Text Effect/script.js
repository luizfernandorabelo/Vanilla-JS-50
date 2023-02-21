const BANNER_PHRASE = 'Palmeiras não tem Mundial!';
let letterIndex = 0;
let timeOut = 1000;

const textH1 = document.getElementById('text');
const speedInput = document.getElementById('speed');

function writeText() {
  textH1.innerText = BANNER_PHRASE.slice(0, letterIndex + 1);
  letterIndex = (letterIndex + 1) % BANNER_PHRASE.length;
  letterIndex = BANNER_PHRASE[letterIndex] === ' ' ? (letterIndex + 1) % BANNER_PHRASE.length : letterIndex;
  setTimeout(writeText, timeOut);
}

speedInput.addEventListener('input', () => {
  timeOut = 1000 / parseInt(speedInput.value);
});

writeText();
