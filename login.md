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

<br>

## Getting Username
```input```에 값이 입력되면 입력 폼이 사라지고 입력 값이 화면에 나타나도록 한다.

<br>

> style.css
```css
.hidden{
    display: none;
}
```

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
<h1 id="greeting" class="hidden"></h1>

```
- input value를 보여줄 자리```<h1 id="greeting"></h1> ``` 를 만들어 준다.
- input 값이 입력되기 전에는 ```<h1 id="greeting"></h1> ```가 보여지면 안됨으로 ```class="hidden"```을 주어 숨겨준다.
 
<br>


> app.js
```javascript
const loginForm =  document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden'; 

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDNE_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDNE_CLASSNAME);
}

loginForm.addEventListener('submit', loginSubmit);

```
- 추가/삭제되는 ```hidden``` class명이 반복적으로 나타나기 때문에 변수```HIDDEN_CLASS```로 설정해 준다. 
   - 💡 ```string```만 포함 된 변수는 **대문자**로 표기한다.
- ```submit``` 이벤트가 발생하면,
   - 1️⃣ ```loginForm```에 ```hidden```class를 추가하여 숨겨준다.
   - 2️⃣ ```greeting```에 나타낼 text를 설정한다.
   - 3️⃣ ```greeting```에  ```hidden```class를 삭제하여 설정한 text가 나타나도록 한다.



<br>

## Saving Username
```input``` 값이 ```localstorage```에 저장 될 수 있도록 한다.

<br>

> app.js
```javascript
const loginForm =  document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden'; 

function onLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    loginForm.classList.add(HIDDNE_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDNE_CLASSNAME);
    
    localStorage.setItem('username', inputValue);
}

loginForm.addEventListener('submit', onLoginSubmit);

```
- ```localStorage```는 브라우저에서 뭔가를 기억할 수 있게 해주는 기능을 한다. 
   - ```localStorage.setItem(key, value)``` : 정보 저장
   - ```localStorage.getItem(key)``` : 정보 불러옴
   - ```localStorage.removeItem(key)``` : 정보 삭제


<br>

## Loading Username
새로고침 했을 때에도 화면에 계속 ```greeting```이 나타날 수 있도록 한다.

<br>

> app.js

```javascript
const loginForm =  document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const LOCALSTORAGE_KEY_NAME = `username`;

function onLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY_NAME, inputValue);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(inputValue);
}

function paintGreeting(name){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${name}`;
}

loginForm.addEventListener('submit', onLoginSubmit);

const localStorageKey = localStorage.getItem(LOCALSTORAGE_KEY_NAME);
if(localStorageKey === null){
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    paintGreeting(localStorageKey);
}


```
- ```greeting``` 자리에 ```hidden```class를 숨겨주고, text를 나타내주 함수```paintGreeting``` 를 만들어 준다.
- ```localStorage```에 key값이 없으면 ```loginForm```이 나타나고, key값이 있으면 ```greeting```가 나타 날 수 있도록 해주는 조건문을 설정한다.

 








