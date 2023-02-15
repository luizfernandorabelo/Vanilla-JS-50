const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

function fillData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80" alt="Laptop Image">';
  title.innerText = 'Lorem ipsum dolor sit amet';
  excerpt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum!';
  profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Profile Image">';
  name.innerText = 'John Doe';
  date.innerText = 'February, 18, 2023';
  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach(bgText => bg.classList.remove('animated-bg-text'));
}

setTimeout(fillData, 1500);
