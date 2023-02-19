
const input = document.querySelector('#validation-input');


input.addEventListener('blur', colorChange);

function colorChange(e) {

    const targetLengthNumber = Number.parseInt(e.target.dataset.length);

    if (e.currentTarget.value.length === targetLengthNumber) {
        
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    } 
        input.classList.add('invalid');
        input.classList.remove('valid');
        return;
}
