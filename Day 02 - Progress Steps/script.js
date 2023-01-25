document.addEventListener('DOMContentLoaded', (e) => {

  const previousBtn = document.getElementById('previous-btn');
  const nextBtn = document.getElementById('next-btn');
  const circles = document.querySelectorAll('.circle');
  const frontProgressBar = document.getElementById('progress-bar-front');
  
  const MAX_STEPS = 4;
  
  let currentStep = 1;

  function updateFrontProgressBar() {
    const barWidth = (currentStep - 1) / (MAX_STEPS - 1) * 100;
    frontProgressBar.style.width = `${barWidth}%`;
  }

  function updateButtonsState() {
    previousBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === MAX_STEPS;
  }

  function updateCirclesState() {
    circles.forEach(circle => {
      if (parseInt(circle.innerHTML) <= currentStep) {
        circle.classList.add('active');
      }
      else {
        circle.classList.remove('active');
      }
    });
  }

  function updateStates() {
    updateFrontProgressBar();
    updateButtonsState();
    updateCirclesState();
  }

  previousBtn.addEventListener('click', () => {
    currentStep = currentStep > 1 ? currentStep - 1 : 0;
    updateStates();
  });

  nextBtn.addEventListener('click', () => {
    currentStep = currentStep < MAX_STEPS ? currentStep + 1 : MAX_STEPS;
    updateStates();
  });

  updateStates();

});