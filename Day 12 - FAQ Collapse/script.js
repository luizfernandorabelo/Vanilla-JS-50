document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');

  function addDisplayNoneClassToElement(element) {
    element.classList.add('display-none');
  }

  function addDisplayInitialClassToElement(element) {
    element.classList.add('display-initial');
  }

  function removeDisplayNoneClassToElement(element) {
    element.classList.remove('display-none');
  }

  function removeDisplayInitialClassToElement(element) {
    element.classList.remove('display-initial');
  }

  function getCardAngleDownIcon(card) {
    const cardQuestion = card.firstElementChild;
    const paragraph = cardQuestion.firstElementChild;
    const angleDownIcon = paragraph.nextElementSibling;
    return angleDownIcon;
  }

  function getCardTimesCircleIcon(card) {
    const timesCircleIcon = getCardAngleDownIcon(card).nextElementSibling;
    return timesCircleIcon;
  }

  function getCardParagraphAnswer(card) {
    const cardAnswer = card.firstElementChild.nextElementSibling;
    const paragraphAnswer = cardAnswer.firstElementChild;
    return paragraphAnswer;
  }

  function getCardBallonIcon(card) {
    const ballonIcon = getCardParagraphAnswer(card).nextElementSibling;
    return ballonIcon;
  }

  function isElementAChangeStateIcon(element) {
    return element.classList.contains('fa-angle-down') ||
           element.classList.contains('fa-times-circle');
  }

  function changeCardState(card) {
    if (card.classList.contains('question-focus'))
      updateCardStateToAnswerFocus(card);
    else
      updateCardStateToQuestionFocus(card);
  }

  function updateCardStateToQuestionFocus(card) {
    card.classList.remove('answer-focus');
    card.classList.add('question-focus');
    updateAngleDownIconToQuestionFocus(card);
    updateTimesCircleIconToQuestionFocus(card);
    updateParagraphAnswerToQuestionFocus(card);
    updateBallonIconToQuestionFocus(card);
  }

  function updateAngleDownIconToQuestionFocus(card) {
    const angleDownIcon = getCardAngleDownIcon(card);
    removeDisplayNoneClassToElement(angleDownIcon);
    addDisplayInitialClassToElement(angleDownIcon);
  }

  function updateTimesCircleIconToQuestionFocus(card) {
    const timesCircleIcon = getCardTimesCircleIcon(card);
    removeDisplayInitialClassToElement(timesCircleIcon);
    addDisplayNoneClassToElement(timesCircleIcon);
  }

  function updateParagraphAnswerToQuestionFocus(card) {
    const paragraphAnswer = getCardParagraphAnswer(card);
    removeDisplayInitialClassToElement(paragraphAnswer);
    addDisplayNoneClassToElement(paragraphAnswer);
  }

  function updateBallonIconToQuestionFocus(card) {
    const ballonIcon = getCardBallonIcon(card);
    removeDisplayInitialClassToElement(ballonIcon);
    addDisplayNoneClassToElement(ballonIcon);
  }

  function updateCardStateToAnswerFocus(card) {
    card.classList.remove('question-focus');
    card.classList.add('answer-focus');
    updateAngleDownIconToAnswerFocus(card);
    updateTimesCircleIconToAnswerFocus(card);
    updateParagraphAnswerToAnswerFocus(card);
    updateBallonIconToAnswerFocus(card);
  }

  function updateAngleDownIconToAnswerFocus(card) {
    const angleDownIcon = getCardAngleDownIcon(card);
    removeDisplayInitialClassToElement(angleDownIcon);
    addDisplayNoneClassToElement(angleDownIcon);
  }

  function updateTimesCircleIconToAnswerFocus(card) {
    const timesCircleIcon = getCardTimesCircleIcon(card);
    removeDisplayNoneClassToElement(timesCircleIcon);
    addDisplayInitialClassToElement(timesCircleIcon);
  }

  function updateParagraphAnswerToAnswerFocus(card) {
    const paragraphAnswer = getCardParagraphAnswer(card);
    removeDisplayNoneClassToElement(paragraphAnswer);
    addDisplayInitialClassToElement(paragraphAnswer);
  }

  function updateBallonIconToAnswerFocus(card) {
    const ballonIcon = getCardBallonIcon(card);
    removeDisplayNoneClassToElement(ballonIcon);
    addDisplayInitialClassToElement(ballonIcon);
  }

  cards.forEach(card => {
    updateCardStateToQuestionFocus(card);
    card.addEventListener('click', (e) => {
      if (isElementAChangeStateIcon(e.target))
        changeCardState(card);
    });
  });

});