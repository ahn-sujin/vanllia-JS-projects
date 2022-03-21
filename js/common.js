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
// }

// pushValue();

// ========================
// 2. 두번째 방법
// - 비밀번호 입력 칸을 기준으로 입력이 되었을 때, 이벤트를 준다.
// - 코드는 간단해 지지만, 비밀번호 입력 칸을 기준으로 하여 문제 발생
// -- id 값이 지워졌을 때 버튼이 비활성화되지 않음
// -- pw 값이 먼저 입력하고 id 입력하면 버튼이 활성화되지 않음
// ========================
// const pushValue = () =>{
//     pwForm.addEventListener('keyup' , () =>{
//         if(idForm.value && pwForm.value){
//             loginButton.disabled = false;
//         } else {
//             loginButton.disabled = true;
//         }
//     })
// }

// pushValue ();

// ========================
// 3. 최종 방법
// - 함수 하나에 실행시킬 이벤트를 설정해주고, 요소에 부여해준다.
// ========================
idForm.addEventListener('keyup', activeEvent);
pwForm.addEventListener('keyup', activeEvent);
loginButton.addEventListener('click', errorEvent);

function activeEvent() {
    switch (!(idForm.value && pwForm.value)) {
        case true : loginButton.disabled = true; break;
        case false : loginButton.disabled = false; break;
    }
}

function errorEvent() { // 이건 그냥 error 문구 출력해보려고 만들어봄.
    formWrap.classList.add('error');
}
