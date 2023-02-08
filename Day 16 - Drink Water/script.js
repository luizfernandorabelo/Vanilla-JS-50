document.addEventListener('DOMContentLoaded', () => {

  const TOTAL_GLASSES = 8;
  const TOTAL_LITERS = 2;

  const remainingAmountSpan = document.querySelector('#remaining-amount');
  const waterPercentageSpan = document.querySelector('#water-percentage');
  const bottleAir = document.querySelector('#bottle .air');
  const bottleWater = document.querySelector('#bottle .water');
  const glassesContainer = document.querySelector('#glasses-container');


  function createGlassDiv() {
    const glassDiv = document.createElement('div');
    glassDiv.className = 'glass';
    const glassAmountInML = TOTAL_LITERS / TOTAL_GLASSES * 1000;
    glassDiv.innerHTML = `<span class="class-amount">${parseInt(glassAmountInML)}</span><span class="glass-unit">ml</span>`;
    return glassDiv;
  }


  function createGlassDivsArray() {
    let glassDivsArray = [];
    for (let i = 0; i < TOTAL_GLASSES; i++) {
      glassDivsArray.push(createGlassDiv());
    }
    return glassDivsArray;
  }


  function appendGlassDivsToDOM(glassDivsArray) {
    for (let glassDiv of glassDivsArray) {
      glassesContainer.appendChild(glassDiv);
    }
  }


  function isTargetElement(target, element) {
    if (target.classList.contains('glass'))
      return target === element;
    return target.parentElement === element;
  }


  function fillGlasses(target) {
    let totalFilled = 0;
    for (let i = 0; i < TOTAL_GLASSES; i++) {
      if (isTargetElement(target, glassDivsArray[i])) {
        if (glassDivsArray[i].classList.contains('full')) {
          for (let j = 0; j < TOTAL_GLASSES; j++)
            glassDivsArray[j].classList.remove('full');
          totalFilled = 0;
        } else {
          glassDivsArray[i].classList.add('full');
          totalFilled++;
          for (let j = i + 1; j < TOTAL_GLASSES; j++)
            glassDivsArray[j].classList.remove('full');
        }
        break;
      } else {
        glassDivsArray[i].classList.add('full');
        totalFilled++;
      }
    }
    const filledPercentage = totalFilled / TOTAL_GLASSES * 100;
    const remainingAmountInL = TOTAL_LITERS - filledPercentage / 100 * TOTAL_LITERS;
    bottleWater.style.height = `${filledPercentage}%`;
    bottleAir.style.height = `${100 - filledPercentage}%`;
    remainingAmountSpan.innerHTML = `${remainingAmountInL}L`;
    waterPercentageSpan.innerHTML = `${filledPercentage}%`;
    remainingAmountSpan.parentElement.style.display = remainingAmountInL === 0 ? 'none' : 'flex';
  }


  const glassDivsArray = createGlassDivsArray();

  appendGlassDivsToDOM(glassDivsArray);

  glassDivsArray.forEach(glassDiv => {
    glassDiv.addEventListener('click', (e) => {
      fillGlasses(e.target);
    });
  });

  remainingAmountSpan.innerHTML = `${TOTAL_LITERS}L`;
  waterPercentageSpan.innerHTML = '0%';

});
