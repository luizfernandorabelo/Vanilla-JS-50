const hourDiv = document.querySelector('#hour-hand');
const minuteDiv = document.querySelector('#minute-hand');
const secondDiv = document.querySelector('#second-hand');
const timeDiv = document.querySelector('#time');
const dateDiv = document.querySelector('#date');
const daySpan = document.querySelector('#day');
const toggleBtn = document.querySelector('#toggle-btn');

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function updateHands(hours, minutes, seconds) {
  hourDiv.style.transform = `translate(-50%, -100%) rotate(${hours / 24 * 360}deg)`;
  minuteDiv.style.transform = `translate(-50%, -100%) rotate(${minutes / 60 * 360}deg)`;
  secondDiv.style.transform = `translate(-50%, -100%) rotate(${seconds / 60 * 360}deg)`;
}

function updateText(hours, minutes, day, month, date) {
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const hoursDisplayed = hours > 12 ? hours % 12 : hours;
  const minutesDisplayed = minutes >= 10 ? minutes : '0' + minutes;
  timeDiv.innerHTML = `${hoursDisplayed}:${minutesDisplayed} ${meridiem}`;
  dateDiv.innerHTML = `${DAYS[day]},${MONTHS[month]}<span id="day">${date}</span>`;
}

function setTime() {
  const time = new Date();
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  updateHands(hours, minutes, seconds);
  updateText(hours, minutes, day, month, date);
}

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.innerHTML === 'Dark Mode') {
    document.querySelector('html').classList.add('dark')
    toggleBtn.innerHTML = 'Light Mode';
  } else {
    document.querySelector('html').classList.remove('dark')
    toggleBtn.innerHTML = 'Dark Mode';
  }
});

setInterval(setTime, 1000);
