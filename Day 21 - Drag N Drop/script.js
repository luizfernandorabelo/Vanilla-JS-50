const filledDiv = document.querySelector('.filled');
const emptyDivs = document.querySelectorAll('.empty');

filledDiv.addEventListener('dragstart', () => {
  filledDiv.classList.add('hold');
  setTimeout(() => filledDiv.classList.remove('hold'), 0);  // for highlighting only the drag, not the box
});

filledDiv.addEventListener('dragend', () => filledDiv.classList.remove('hold'));

emptyDivs.forEach((div) => {
  div.addEventListener('dragover', (e) => e.preventDefault());
  
  div.addEventListener('dragenter', (e) => {
    e.preventDefault();
    div.classList.add('hovered');
  });

  div.addEventListener('dragleave', () => div.classList.remove('hovered'));

  div.addEventListener('drop', () => {
    div.className = 'empty';
    div.append(filledDiv);
  });
});
