
const formWrap = document.querySelector('.form_wrap_line');
const idForm = document.querySelector('#user_id');
const pwForm = document.querySelector('#user_pw');
const loginButton = document.querySelector('#btn_login');

// ========================
// 1. 첫번째 방법
// - 코드가 길어진다.
// - 한번 활성화된 버튼이 다시 비활성화로 돌아가지 않는다.
// ========================
// let idCheck = false;
// let pwCheck = false;

// const pushValue = () => {
//     idForm.addEventListener('keypress', () => {
//         idCheck = true;
//     });

//     pwForm.addEventListener('keypress', () => {
//         pwCheck = true;
//         if(idCheck && pwCheck){
//             loginButton.disabled = false;
//         }
//     })

//     loginButton.addEventListener('click', () => {
//         if (!idForm.value || !pwForm.value){
//             formWrap.classList.add('error');
//         }
//     })
// }

// pushValue();

// ========================
// 2. 두번째 방법
// - 비밀번호 입력 칸을 기준으로 입력이 되었을 때, 이벤트를 준다.
// - 코드는 간단해 지지만, 활성화된 버튼이 다시 비활성화로 돌아가지 않는다.
// ========================
const pushValue = () =>{
    pwForm.addEventListener('keypress' , () =>{
        if(idForm.value && pwForm.value){
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    })
}
pushValue ();



