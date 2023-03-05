const codeInputs = document.querySelectorAll('.code');

codeInputs[0].focus();

codeInputs.forEach((codeInput, index) => codeInput.addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) {
    codeInput.value = '';
    if (index !== codeInputs.length - 1) {
      setTimeout(() => {
        codeInputs[index].blur();
        codeInputs[index+1].focus();
      }, 1);
    } 
  }
  else if (e.key === 'Backspace') {
    if (index !== 0) {
      setTimeout(() => {
        codeInputs[index].blur();
        codeInputs[index-1].focus();
      }, 1);
    }
  }
}));
