const loginForm = document.querySelector('#login');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

const HIDEEN_CLASS = 'hidden';
const LOCAL_STORAGE_KEY_NAME = 'usename';

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDEEN_CLASS);
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME,userName);
    paintGreeting(userName);
}

function paintGreeting(name){
    greeting.classList.remove(HIDEEN_CLASS);
    greeting.innerText = `Hello ${name}`;
}

function loginButtonActive(){
    if(loginInput.value === ''){
        loginButton.disabled = true;
    } else {
        loginButton.disabled = false;
    }
}

const localStorageKey = localStorage.getItem(LOCAL_STORAGE_KEY_NAME)
if(localStorageKey === null){
    loginForm.classList.remove(HIDEEN_CLASS);
} else {
    paintGreeting(localStorageKey);
}

loginForm.addEventListener('submit', onLoginSubmit);
loginButton.addEventListener('click', onLoginSubmit);
loginInput.addEventListener('keyup', loginButtonActive);