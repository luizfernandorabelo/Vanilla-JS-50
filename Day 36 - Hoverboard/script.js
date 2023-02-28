const TOTAL_SQUARES = 400;

const mainContainer = document.querySelector('#main-container');

createGridSquares();

function createGridSquares() {
  for (let i = 0; i < TOTAL_SQUARES; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    squareDiv.addEventListener('mouseover', () => {
      const red = parseInt(Math.random() * 255);
      const green = parseInt(Math.random() * 255);
      const blue = parseInt(Math.random() * 255);
      squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      squareDiv.style.boxShadow = `0 0 2px rgb(${red}, ${green}, ${blue}, 0 0 10px rgb(${red}, ${green}, ${blue})`
    });

    squareDiv.addEventListener('mouseleave', () => {
      squareDiv.style.backgroundColor = '#1d1d1d';
      squareDiv.style.boxShadow = '0 0 2px black';
    });

    mainContainer.appendChild(squareDiv);
  }
}
