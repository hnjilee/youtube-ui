const clampBtn = document.querySelector('.info__clamp');
const title = document.querySelector('.info__title');

clampBtn.addEventListener('click', () => {
  title.classList.toggle('info__title--clamped');
  clampBtn.classList.toggle('info__clamp--clicked');
});
