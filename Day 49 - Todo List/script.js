const todosUl = document.querySelector('#todos');
const todosForm = document.querySelector('form');
const currentInput = document.querySelector('#todo-input');

todosForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (currentInput.value) {
    createNewTodoHTML(currentInput.value);
    currentInput.value = '';
    saveTodosToLocalStorage();
  } 
});

function createNewTodoHTML(text, completed) {
  const todoLi = document.createElement('li');
  todoLi.classList.add('todo');
  if (completed) todoLi.classList.add('completed');
  todoLi.innerText = text;

  todoLi.addEventListener('click', () => {
    todoLi.classList.toggle('completed');
    saveTodosToLocalStorage();
  });

  todoLi.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    todoLi.remove();
    saveTodosToLocalStorage();
  });

  todosUl.appendChild(todoLi);
}

function getTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos)
    todos.forEach(todo => createNewTodoHTML(todo.text, todo.completed));
}

function saveTodosToLocalStorage() {
  const todos = [];
  todosUl.querySelectorAll('li.todo').forEach(li => {
    todos.push({text: li.innerText, completed: li.classList.contains('completed')});
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

getTodosFromLocalStorage();
