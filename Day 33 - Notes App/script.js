const storedValues = JSON.parse(localStorage.getItem('notes'));

if (storedValues) {
  storedValues.forEach(value => {
    addNewNote(value);
  })  
}

const addNoteBtn = document.querySelector('#add-note-btn');

addNoteBtn.addEventListener('click', () => addNewNote());

function addNewNote(text='') {
  const noteDiv = document.createElement('div');
  noteDiv.className = 'note';

  noteDiv.appendChild(createToolsDiv());
  noteDiv.appendChild(createMainDiv(text));
  noteDiv.appendChild(createTextArea(text));

  document.body.appendChild(noteDiv);
}

function createToolsDiv() {
  const toolsDiv = document.createElement('div');
  toolsDiv.className = 'tools';

  toolsDiv.appendChild(createEditNoteBtn());
  toolsDiv.appendChild(createDeleteNoteBtn());
  
  return toolsDiv;
}

function createEditNoteBtn() {
  const editNoteBtn = document.createElement('button');
  editNoteBtn.className = 'fas fa-edit';

  editNoteBtn.addEventListener('click', () => {
    const mainDiv = editNoteBtn.parentElement.nextElementSibling;
    const textArea = mainDiv.nextElementSibling;
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    textArea.focus();
  });

  return editNoteBtn;
}

function createDeleteNoteBtn() {
  const deleteNoteBtn = document.createElement('button');
  deleteNoteBtn.className = 'fas fa-trash';

  deleteNoteBtn.addEventListener('click', () => {
    const noteDiv = deleteNoteBtn.parentElement.parentElement;
    noteDiv.remove();
    updateLocalStorage();
  });

  return deleteNoteBtn;
}

function createMainDiv(text) {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main' + (text ? '' : ' hidden');
  mainDiv.innerHTML = marked(text);
  return mainDiv;
}

function createTextArea(text) {
  const textArea = document.createElement('textarea');
  textArea.className = (text ? 'hidden' : '');

  textArea.value = text;

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    const mainDiv =  textArea.previousElementSibling;
    mainDiv.innerHTML = marked(value);
    updateLocalStorage();
  })

  return textArea;
}

function updateLocalStorage() {
  const textAreas = document.querySelectorAll('textarea');

  const values = [];

  textAreas.forEach(textArea => {
    if (textArea.classList.contains('hidden')) {
      textArea.classList.remove('hidden');
      values.push(textArea.value);
      textArea.classList.add('hidden');
    } else {
      values.push(textArea.value);
    }
  });

  localStorage.setItem('notes', JSON.stringify(values));
}
