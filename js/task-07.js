const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

font.addEventListener('input', movingSlider);

function movingSlider(e) {
    text.style.fontSize = `${e.currentTarget.value}px`;
};