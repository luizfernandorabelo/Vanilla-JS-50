const MESSAGES = [
  'Error Message One',
  'Error Message Two',
  'Error Message Three',
  'Error Message Four',
  'Error Message Five',
  'Error Message Six',
  'Error Message Seven',
  'Error Message Eight',
  'Error Message Nine',
  'Error Message Ten',
];

const button = document.querySelector('button');
const toasts = document.getElementById('toasts');

let messageIndex = 0;

function createNotification() {
  const notificationDiv = document.createElement('div');
  notificationDiv.classList.add('toast');
  notificationDiv.innerText = MESSAGES[messageIndex];
  notificationDiv.style.color = `rgb(
    ${parseInt(Math.random() * 255)},
    ${parseInt(Math.random() * 255)},
    ${parseInt(Math.random() * 255)}
  )`;
  toasts.appendChild(notificationDiv);
  setTimeout(() => notificationDiv.remove(), 3000);
  messageIndex = (messageIndex + 1) % MESSAGES.length;
}

button.addEventListener('click', createNotification);
