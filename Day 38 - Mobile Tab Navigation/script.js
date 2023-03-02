const imageSelectors = {
  'Home': '#home-img',
  'Work': '#work-img',
  'Blog': '#blog-img',
  'About Us': '#about-us-img'
};

const lis = document.querySelectorAll('ul li');
const imgs = document.querySelectorAll('img');

lis.forEach(li => {
  li.addEventListener('click', () => {
    makeLiActive(li);
    updateImage(li.querySelector('p').innerText);
  });
});

function makeLiActive(li) {
  lis.forEach(li => li.classList.remove('active'));
  li.classList.add('active');
}

function updateImage(correspondingText) {
  imgs.forEach(img => img.classList.remove('show'));
  const visibleImg = document.querySelector(imageSelectors[correspondingText]);
  visibleImg.classList.add('show');
}
