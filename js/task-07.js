const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${input.value}px`;

input.addEventListener('input', movingSlider);

function movingSlider(e) {
    text.style.fontSize = `${e.currentTarget.value}px`;
};

/* console.dir(document.querySelector('#font-size-control').value);
console.dir(Number(input.min));
console.log(typeof(Number(input.min)));
console.log(`${Number(input.min)}px`); */