document.addEventListener('DOMContentLoaded', () => {

  const openIcon = document.querySelector('.fa-bars');
  const closeIcon = document.querySelector('.fa-times');
  const navBar = document.querySelector('#nav-bar');

  navBar.classList.add('active');

  openIcon.addEventListener('click', e => navBar.classList.add('active'));
  closeIcon.addEventListener('click', e => navBar.classList.remove('active'));

});
