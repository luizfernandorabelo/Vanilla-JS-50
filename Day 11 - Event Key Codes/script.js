document.addEventListener('DOMContentLoaded', () => {

  const mainContainer = document.querySelector('.main-container');

  function loadInitialHTML() {
    mainContainer.innerHTML = `<div class="initial-message">Press any key</div>`;
  }

  function updateKeyHTML(e) {
    mainContainer.innerHTML = `
      <div class="inner-container">
        <div class="data">${e.key === ' ' ? 'Space' : e.key}</div>
        <div class="label">event.key</div>
      </div>
      <div class="inner-container">
        <div class="data">${e.keyCode}</div>
        <div class="label">event.keyCode</div>
      </div>
      <div class="inner-container">
        <div class="data">${e.code}</div>
        <div class="label">event.code</div>
      </div>
    `;
  }

  document.addEventListener('keydown', (e) => {
    updateKeyHTML(e);  
  });

  loadInitialHTML();

}); 
