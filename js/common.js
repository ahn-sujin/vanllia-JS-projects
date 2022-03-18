// ========================
// 1. 첫번째 방법
// - 코드가 길어진다.
// - 한번 활성화된 버튼이 다시 비활성화로 돌아가지 않는다.
// ========================

const idForm = document.querySelector('#user_id');
const passwordForm = document.querySelector('#user_pw');
const loginButton = document.querySelector('#btn_login');

let checkid = false;
let checkpw = false;

const pushValue = () => {
    idForm.addEventListener('keypress', ()=> {
        checkid = true;
    });

    passwordForm.addEventListener('keypress', ()=> {
        checkpw = true;
        if(checkid && checkpw){
            loginButton.disabled = false; 
        }
    });

}
pushValue();




