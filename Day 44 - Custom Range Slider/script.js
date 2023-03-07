const rangeInput = document.querySelector('#range');

rangeInput.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  const label = e.target.nextElementSibling;
  const rangeWidth = parseInt(getComputedStyle(e.target).getPropertyValue('width'));
  const labelWidth = parseInt(getComputedStyle(label).getPropertyValue('width'));
  const max = e.target.max, min = e.target.min;
  label.style.left = `${value * rangeWidth / max - labelWidth / 2}px`;
  label.innerHTML = value;
});
