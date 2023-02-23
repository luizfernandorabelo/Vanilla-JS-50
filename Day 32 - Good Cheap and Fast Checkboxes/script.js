const checkBoxes = document.querySelectorAll('.toggle');

const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('change', (e) => {
    if (good.checked && cheap.checked && fast.checked) {
      if (e.target === good)
        fast.checked = false;
      else if (e.target === fast)
        cheap.checked = false;
      else 
        good.checked = false;
    }
  });
});
