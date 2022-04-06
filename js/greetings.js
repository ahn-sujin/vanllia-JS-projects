const loginForm = document.querySelector('#login form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value
    console.log(userName);
}



loginForm.addEventListener('submit', onLoginSubmit)
loginButton.addEventListener('click', onLoginSubmit)
