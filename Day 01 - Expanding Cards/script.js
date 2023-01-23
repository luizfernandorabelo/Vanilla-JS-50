const h1 = document.querySelector('h1');
const cards = document.querySelectorAll('.card');

function removeActiveClassFromCards() {
  cards.forEach(card => card.classList.remove('active'));
}

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    removeActiveClassFromCards();
    card.classList.add('active');
  });
})
