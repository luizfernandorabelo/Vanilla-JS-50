document.addEventListener('DOMContentLoaded', () => {

  const boxes = document.querySelectorAll('.box');
  const BOX_HEIGHT = 200;


  function updateInitialBoxes() {

    const windowHeight = window.innerHeight;
    const totalVisible = parseInt(0.9 * windowHeight / BOX_HEIGHT);

    for (let i = 0; i < totalVisible; i++) {
      boxes[i].classList.add('show');
    }

    console.log(totalVisible);
  }


  window.addEventListener('scroll', (e) => {

    const triggerHeight = 0.8 * window.innerHeight;

    boxes.forEach(box => {
      if (box.getBoundingClientRect().top < triggerHeight) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });

  });


  updateInitialBoxes();

});
