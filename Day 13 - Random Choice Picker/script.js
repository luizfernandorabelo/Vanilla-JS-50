const DEFAULT_BLINK_DELAY_IN_MS = 100
const LONG_BLINK_DELAY_IN_MS = 300
const TOTAL_RANDOM_CHOICES = 30

const choicesContainer = document.querySelector('.choices-container');
const textAreaInput = document.querySelector('#textarea-input');


function removeChoices() {

  while (choicesContainer.childElementCount != 0) {
    choicesContainer.firstElementChild.remove();
  }

}


function createChoiceSpan(choiceName) {

  const newSpanElement = document.createElement('span');
  const textNode = document.createTextNode(choiceName);

  newSpanElement.appendChild(textNode);
  newSpanElement.className = 'choice';

  return newSpanElement;
}


function createChoices() {

  const choiceNames = textAreaInput.value.split(',');

  for (let choiceName of choiceNames) {
    choiceName = choiceName.trim();
    if (choiceName != '')
      choicesContainer.appendChild(createChoiceSpan(choiceName));
  }

}


function updateChoices() {
  
  removeChoices();
  createChoices();

}


function deactivateChoices(choices) {

  for (let choice of choices) {
    choice.classList.remove('active');
  }

}


function activateRandomChoice(choices) {
  let pickedIndex = Math.floor(Math.random() * choices.length);
  choices[pickedIndex].classList.add('active');
}


function blinkRandomChoices(choices) {

  let blinkCount = 0;

  const interval = setInterval(() => {
    deactivateChoices(choices);
    activateRandomChoice(choices);
    blinkCount++;
    if (blinkCount > TOTAL_RANDOM_CHOICES)
      clearInterval(interval);
  }, 100);

}


function blinkPickedChoice(pickedChoice) {

  for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
      setTimeout(() => {
        pickedChoice.classList.add('active');
      }, LONG_BLINK_DELAY_IN_MS * i);
    } else {
      setTimeout(() => {
        pickedChoice.classList.remove('active');
      }, LONG_BLINK_DELAY_IN_MS * i);
    }
  }

}


function pickRandomChoice() {

  const choices = document.querySelectorAll('.choice');

  blinkRandomChoices(choices);

  setTimeout(() => {
    deactivateChoices(choices);
    let pickedIndex = Math.floor(Math.random() * choices.length);
    choices[pickedIndex].classList.add('active');
    blinkPickedChoice(choices[pickedIndex]);
  }, TOTAL_RANDOM_CHOICES * DEFAULT_BLINK_DELAY_IN_MS + LONG_BLINK_DELAY_IN_MS);

}


document.addEventListener('keyup', e => {

  if (e.key === 'Enter') {
    pickRandomChoice();
  } else {
    updateChoices();
  }

});
