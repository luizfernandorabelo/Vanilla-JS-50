const numberSpans = document.querySelectorAll('.numbers span');
const counterDiv = document.querySelector('.counter');
const finalDiv = document.querySelector('.final');
const replayBtn = document.querySelector('#replay');

runAnimation();

function runAnimation() {
  numberSpans.forEach((numberSpan, index) => {
    numberSpan.addEventListener('animationend', (e) => {
      if (e.animationName === 'go-in' && index !== numberSpans.length - 1) {
        numberSpan.classList.remove('in');
        numberSpan.classList.add('out');
      } else if (e.animationName === 'go-out' && numberSpan.nextElementSibling) {
        numberSpan.nextElementSibling.classList.add('in');
      } else {
        counterDiv.classList.add('hide');
        finalDiv.classList.add('show');
      }
    })
  });
}

replayBtn.addEventListener('click', () => {
  counterDiv.classList.remove('hide');
  finalDiv.classList.remove('show');
  numberSpans.forEach(numberSpan => {
    numberSpan.classList.value = '';
  });
  numberSpans[0].classList.add('in');
  runAnimation();
});
