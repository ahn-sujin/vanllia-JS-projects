const loginForm =  document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const LOCALSTORAGE_KEY_NAME = `username`;

function onLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY_NAME, inputValue);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(inputValue);
}

function paintGreeting(name){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${name}`;
}

loginForm.addEventListener('submit', onLoginSubmit);

const localStorageKey = localStorage.getItem(LOCALSTORAGE_KEY_NAME);
if(localStorageKey === null){
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    paintGreeting(localStorageKey);
}


