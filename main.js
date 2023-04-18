const clampBtn = document.querySelector('.title-and-clamp__clamp');
const title = document.querySelector('.title-and-clamp__title');

clampBtn.addEventListener('click', () => {
  title.classList.toggle('title-and-clamp__title--clamped');
  clampBtn.classList.toggle('title-and-clamp__clamp--clicked');
});
