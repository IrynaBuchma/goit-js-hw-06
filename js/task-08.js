const form = document.querySelector(".login-form");
const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');


form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    if (emailInput.value === "" || passwordInput.value === "") {
        return alert('Bci поля повинні бути заповнені');
    } 
    const { elements: { email, password } } = e.currentTarget;
    
    const Object = { email: email.value, password: password.value };
    
    console.log(Object);
    
        return e.currentTarget.reset();
    
};