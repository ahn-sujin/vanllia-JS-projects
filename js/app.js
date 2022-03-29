const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const HIDDNE_CLASSNAME = 'hidden';


function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDNE_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDNE_CLASSNAME);
}


loginForm.addEventListener('submit', loginSubmit);



