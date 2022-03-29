const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const link = document.querySelector('a');

function loginSubmit(event){
    const userName = loginInput.value;
    event.preventDefault();
    console.log(userName);
    console.log(event);
}
function handleLinkClick(event){
    event.preventDefault();
    alert('welcome!')
    console.log(event);
}

loginForm.addEventListener('submit', loginSubmit);
link.addEventListener('click', handleLinkClick);



