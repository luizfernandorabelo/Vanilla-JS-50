const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');

button.addEventListener('click', (e) => {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    input.classList.remove('active');
  } else {
    button.classList.add('active');
    input.classList.add('active');
  }
});

