const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function loginBtnClick(){
    const value = loginInput.value;
    if(value === ''){
        alert('Please input your name')
    } else if(value.length >= 15) {
        alert('Sorry, name is too long')
    }
    
}

loginButton.addEventListener('click', loginBtnClick);
