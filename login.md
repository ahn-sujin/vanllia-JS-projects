# LOGIN 

### 구현 기능 
1️⃣ input에 값을 입력하면 입력 폼을 사라지게 만들고, 새로운 문구가 나타나게 한다.

2️⃣ 입력된 값이 사용자 localstorage에 저장 될 수 있도록 한다. 

<br>

## input value 

> index.html
```html
  <form id="login-form">
        <input
            required // 필수 값 표시 
            type="text"
            maxlength="15" // 최대 입력 되는 text 수
            placeholder="what is your name?"
        >
        <input type="submit" value="login">
   </form>

```
- ```html```안에서 ```input```의 유효성 검사가 실행되기 위해서는 ```form```태그가 ```input```을 **반드시** 감싸고 있어아한다.

<br>

> app.js
``` javascript
const loginForm =  document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input');

function onLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    console.log(inputValue)
}

loginForm.addEventListener('submit', onLoginSubmit);

```
- ```form```의 기본동작은 입력 된 값은 submit 시켜준다.
- 브라우저는 data가 submit됐을 때에 새로고침이 된다. 
- 이러한 브라우저의 기본종작은 막기 위해 ```preventDefault``` 메소드를 사용할 수 있다.

<br>

## preventDefault
```preventDefault```는 브라우저의 기본동작을 막는 기능을 한다.

<br>

```javascript
function onLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    console.log(inputValue)
}

loginForm.addEventListener('submit', onLoginSubmit);

```
- ```submit``` 이벤트가 발생했을 때, **실행되는 함수의 첫번째 인자로 object가 주어지게 된다.**
- 이 object에는 방금 일어난 이벤트에 대한 여러 정보가 담겨 있다. 
- 이 object를 받기 위해서는 **실행되는 함수에 인자```event```로 자리를 마련**해주면 된다.
 








