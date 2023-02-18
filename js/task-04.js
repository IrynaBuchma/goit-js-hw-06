let counterValue = 0;


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');


decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(e) {
    counterValue -= 1;
    decrementBtn.style.backgroundColor = 'yellow';
    value.textContent = counterValue;
};
function onIncrementBtnClick(e) {
    counterValue += 1;
    incrementBtn.style.backgroundColor ='lawngreen';
    value.textContent = counterValue;
};
