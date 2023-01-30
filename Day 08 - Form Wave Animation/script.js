document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('form');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');


  function moveLabel(labelElement, addedClass, removedClass, delay) {

    const spans = Array.from(labelElement.children);

    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].classList.add(addedClass);
        spans[i].classList.remove(removedClass);
      }, delay * i);
    }

  }


  function updateFocusedInputState(inputElement) {

    const inputContainer = inputElement.parentElement;

    inputContainer.classList.add('focused');

    if (inputElement.value === '') {
      moveLabel(inputContainer.firstElementChild, 'up', 'down', 50);
    }

  }


  function updateBlurredInputState(inputElement) {

    const inputContainer = inputElement.parentElement;

    inputContainer.classList.remove('focused');

    if (inputElement.value === '') {
      moveLabel(inputContainer.firstElementChild, 'down', 'up', 30);
    }

  }


  function updateInitialInputState(inputElement) {

    const labelElement = inputElement.parentElement.firstElementChild;

    labelElement.innerHTML = labelElement.innerHTML.split('').map(letter => `<span>${letter}</span>`).join('');

    moveLabel(labelElement, 'down', 'up', 0);

  }


  form.addEventListener('submit', e => e.preventDefault());
  emailInput.addEventListener('focus', () => updateFocusedInputState(emailInput));
  emailInput.addEventListener('blur', () => updateBlurredInputState(emailInput));
  passwordInput.addEventListener('focus', () => updateFocusedInputState(passwordInput));
  passwordInput.addEventListener('blur', () => updateBlurredInputState(passwordInput));

  updateInitialInputState(emailInput);
  updateInitialInputState(passwordInput);

});

