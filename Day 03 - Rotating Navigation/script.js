const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const mainContainer = document.querySelector('.main-container');
const navBar = document.querySelector('nav');


openBtn.addEventListener('click', (e) => {
  mainContainer.classList.add('rotated');
  navBar.classList.add('visible');
  document.body.classList.add('overflow-hidden');
});


closeBtn.addEventListener('click', (e) => {
  mainContainer.classList.remove('rotated');
  navBar.classList.remove('visible');
  document.body.classList.remove('overflow-hidden');
});

