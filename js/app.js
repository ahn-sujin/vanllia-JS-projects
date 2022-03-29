const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

function loginSubmit(event){
    const userName = loginInput.value;
    event.preventDefault();
    console.log(userName);
}

loginForm.addEventListener('submit', loginSubmit);




