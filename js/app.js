const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDNE_CLASSNAME = 'hidden';
const KEY_NAME = 'username'

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(KEY_NAME , userName);

    loginForm.classList.add(HIDDNE_CLASSNAME);
    paintGreeting(userName);
}

function paintGreeting(name) {
    greeting.classList.remove(HIDDNE_CLASSNAME);
    greeting.innerText = `Hello ${name}`;
}

loginForm.addEventListener('submit', loginSubmit);

const userNameKey = localStorage.getItem(KEY_NAME); 

if(userNameKey === null){
    loginForm.classList.remove(HIDDNE_CLASSNAME);
} else {
    paintGreeting(userNameKey);
}



