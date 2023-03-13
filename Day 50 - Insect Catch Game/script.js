const screenSequence = {
  start: 0,
  selection: 1,
  game: 2
};

const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('#start-btn');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const timer = document.querySelector('#time');
const score = document.querySelector('#score');
const message = document.querySelector('#message');

let insectImgURL = '';

startBtn.addEventListener('click', () => {
  screens[screenSequence.start].classList.add('up');
});

chooseInsectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    insectImgURL = btn.querySelector('img').src;
    screens[1].classList.add('up');
    setTimeout(() => { startTimer(); spawnInsects(); }, 1000);
  })
});

function startTimer() {
  const minutesElement = timer.querySelector('.minutes');
  const secondsElement = timer.querySelector('.seconds');

  setInterval(() => {
    secondsElement.innerText = (parseInt(secondsElement.innerText) + 1) % 60;
    if (secondsElement.innerText === '0')
      minutesElement.innerText = parseInt(minutesElement.innerText) + 1;
    if (secondsElement.innerText.length < 2)
      secondsElement.innerText = '0' + secondsElement.innerText;
    if (minutesElement.innerText.length < 2)
      minutesElement.innerText = '0' + minutesElement.innerText;
  }, 1000);
}

function spawnInsects(numberOfInsects=1) {
  for (let i = 0; i < numberOfInsects; i++) {
    const insectDiv = document.createElement('div');
    insectDiv.className = 'insect';

    insectDiv.style.top = 
      `${parseInt(0.85 * window.innerHeight * Math.random() + 100)}px`;
    insectDiv.style.left =
      `${parseInt(window.innerWidth * Math.random())}px`;

    insectDiv.addEventListener('click', () => {
      insectDiv.classList.add('caught');
      updateScore();
      spawnInsects(3)
    });

    const insectImg = document.createElement('img');
    insectImg.src = insectImgURL;
    insectImg.style.transform = `rotate(${Math.random() * 360}deg)`;

    insectDiv.appendChild(insectImg);
    screens[screenSequence.game].appendChild(insectDiv);
  }
}

function updateScore() {
  const updatedElement = score.querySelector('.total-caught');
  updatedElement.innerText = parseInt(updatedElement.innerText) + 1;
  if (parseInt(updatedElement.innerText) % 25 === 0) {
    message.classList.add('visible');
    setTimeout(() => message.classList.remove('visible'), 5000);
  }
}
