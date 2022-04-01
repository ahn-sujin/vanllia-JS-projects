# TO DO LIST

### 구현기능
1️⃣ todo 입력하면 화면에 list 생성

2️⃣ list 화면에서 삭제

3️⃣ 새로 고침해도 list가 계속 출력될 수 있게 localstorage에 저장

4️⃣ list 삭제 하면 더이상 화면에 출력되지 않도록 localstorage에서 삭제

<br>

## Adding To Dos
화면에 todolist 출력한다

<br>

> index.html
```html
<h1 id="clock">00:00:00</h1>
<form id="login-form" class="hidden">
  <input
     required
     type="text"
     maxlength="15"
     placeholder="what is your name?"
   >
   <input type="submit" value="login">
</form>
<h2 id="greeting" class="hidden"></h2>
<form id="todo-form">
   <input required type="text" placeholder="write a To Do and Press Enter">
</form>
<ul id="todo-list"></ul>
<div id="quotes">
  <span></span>
  <span></span>
</div>

````
- list가 **입력**되는 자리를 만들어 준다. ```<form id="todo-form"> ... </form>```
- list가 **출력**되는 자리를 만들어 준다. ```<ul id="todo-list"></ul>```

<br>

> todo.js
```javascript
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo; 
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

```
- ```handleToDoSubmit```에서 ```newTodo```로 value값을 **먼저** 저장한 다음 ``` toDoInput.value = ""```로 비워준다.
   - ```const newTodo = toDoInput.value``` 는 **input의 현재 value를 복사**하는 것을 의미한다.

<hr>

### 💥문제점
- 생성된 list를 지울 수 없다.
- 새로고침하면 list가 사라진다. (저장되지 않음)

<br>


## Deleting To Dos
화면에서 todolist 삭제한다.


<br>

## Saving To Dos (localStorage)
출력된 todolist를 localstorage에 저장한다.


<br>

## Loading To Dos (localStorage)
localstorage에 저장된 todolist를 화면에 출력한다.


<br>

## Deleting To Dos (localStorage)
localstorage에 저장된 todolist를 삭제하고, 화면에서도 삭제시켜준다.




