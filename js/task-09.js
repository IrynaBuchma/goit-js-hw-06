function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const span = document.querySelector('.color');
const btnColorCange = document.querySelector('.change-color');

btnColorCange.addEventListener('click', onColorChange);

function onColorChange(e) {
  
  e.currentTarget === btnColorCange;

    body.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor();
    return;
  };