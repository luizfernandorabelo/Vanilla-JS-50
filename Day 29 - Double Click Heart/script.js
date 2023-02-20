const postDiv = document.querySelector('#post-div');
const likesCountSpan = document.querySelector('#times');

postDiv.addEventListener('dblclick', (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fa');
  heart.classList.add('fa-heart');

  const x = e.clientX, leftOffset = e.target.offsetLeft; 
  const y = e.clientY, topOffset = e.target.offsetTop;;

  heart.style.left = `${x - leftOffset}px`;
  heart.style.top = `${y - topOffset}px`;

  postDiv.appendChild(heart);
  likesCountSpan.innerText = parseInt(likesCountSpan.innerText) + 1;

  setTimeout(() => heart.remove(), 1000);
});
