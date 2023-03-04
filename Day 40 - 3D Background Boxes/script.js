const boxesContainer = document.querySelector('#boxes-container');
const btn = document.querySelector('button');

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('box');
      boxDiv.style.backgroundPosition = `${j * -125}px ${i * -125}px`;
      boxesContainer.appendChild(boxDiv);
    }
  }
}

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

createBoxes();
