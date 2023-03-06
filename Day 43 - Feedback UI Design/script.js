const mainContainerDiv = document.querySelector('#main-container');
const ratingDivs = document.querySelectorAll('.rating');
const sendButton = document.querySelector('#send-btn');

let activeLabel = 'Happy';

ratingDivs.forEach(ratingDiv => {
  ratingDiv.addEventListener('click', () => {
    removeAllActiveClass();
    ratingDiv.classList.add('active')
    activeLabel = ratingDiv.querySelector('small').innerText;
  });
});

const removeAllActiveClass = () => 
  ratingDivs.forEach(ratingDiv => ratingDiv.classList.remove('active'));

sendButton.addEventListener('click', () => {
  mainContainerDiv.innerHTML = `
    <div id="final-container">
      <i class="fa fa-heart"></i>
      <p>Thank You!</p>
      <p>Feedback: <strong>${activeLabel}</strong></p>
      <p>We'll use your feedback to improve <br> our customer support</p>
    </div> 
  `
  setTimeout(() => window.location.reload(), 5000);
});
