const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const mouseX = e.clientX, mouseY = e.clientY;
    const buttonX = e.target.offsetLeft, buttonY = e.target.offsetTop;
    const relativeX = mouseX - buttonX, relativeY = mouseY - buttonY;
    const circle = document.createElement('span');

    circle.classList.add('circle');
    circle.style.left = relativeX + 'px';
    circle.style.top = relativeY + 'px';

    button.appendChild(circle);
    setTimeout(() => circle.remove(), 1000);
  });
});