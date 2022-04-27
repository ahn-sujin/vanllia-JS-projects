const loginArea = document.querySelector('#login');
const loginForm = loginArea.querySelector('form');
const loginInput = loginArea.querySelector('input');
const loginButton = loginArea.querySelector('button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const KEY_NAME = 'username';

function onLoginsubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginArea.classList.add(HIDDEN_CLASS);
    localStorage.setItem(KEY_NAME , userName);
    paintGreeting(userName);
}

function paintGreeting(name){
    greeting.innerText = `Hello ${name}`;
}

const localStorageKey = localStorage.getItem(KEY_NAME);
if(localStorageKey === null){
    loginArea.classList.remove(HIDDEN_CLASS);
} else {
    paintGreeting(localStorageKey);
}

function activeLoginButton(){
    if(loginInput.value === ''){
        loginButton.disabled = true
    } else {
        loginButton.disabled = false
    }
}

loginForm.addEventListener('submit', onLoginsubmit);
loginButton.addEventListener('click', onLoginsubmit);
loginInput.addEventListener('keyup', activeLoginButton);


