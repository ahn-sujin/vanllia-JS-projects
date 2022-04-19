const loginForm = document.querySelector('#login');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const LOCAL_STORAGE_KEY_NAME = 'username'


function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, userName);
    paintGreeting(userName);
}

function paintGreeting(name){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${name}`;
}

function activeLoginButton(){
    if(loginInput.value === ''){
        loginButton.disabled = true;
    } else {
        loginButton.disabled = false;
    }
}

const localStorageKey = localStorage.getItem(LOCAL_STORAGE_KEY_NAME);
if(localStorageKey === null){
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    paintGreeting(localStorageKey)
}

loginForm.addEventListener('submit', onLoginSubmit);
loginButton.addEventListener('click', onLoginSubmit);
loginInput.addEventListener('keyup', activeLoginButton);
