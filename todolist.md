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

> todo.js

```javascript
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(event.target.parentElement);
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo; 
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteButton);
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
- ```event.target.parentElement``` : 어떤 요소에서 이벤트가 발생했는지 알 수 있다. 
   - ```event.target``` : 어떤 버튼이 클릭 되었는지 알려준다. (클릭된 HTML Element) 
   
      ➡ **이벤트가 발생한 요소를 찾고**
   - ```parentElement``` : 클릭된 HTML Element ```button``` 의 부모 요소를 알 수 있다. 

      ➡ **그 요소의 부모 요소를 찾는다.**
     
<br>

## Saving To Dos (localStorage)
출력된 todolist를 localstorage에 저장한다.

<br>

> todo.js

```javascript
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const toDos = [];

function saveToDo(){
    localStorage.setItem('todo', JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(event.target.parentElement);
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo; 
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

```
- localstorage에 저장할 list를 담을 배열을 만들어 준다. ```const toDos = []```
- **하지만, localstorage에는 array를 저장할 수 없다. 오직 string만 가능!**
   - ``` JSON.stringify()``` : js에서 object나 **array를 string으로** 바꿔준다.
   - ``` JSON.parse()``` : js에서 **string을 array로** 바꿔준다.

<br>

## Loading To Dos (localStorage)
localstorage에 저장된 todolist를 화면에 출력한다.

<br>

> todo.js

```javascript
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todo';

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(event.target.parentElement);
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo; 
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

```
- ```forEach``` : array에 있는 각각의 item(li)에 대해서 함수를 실행시킨다.
- ```toDos``` item들의 배열이 계속 변경됨으로 ```const toDos```에서 ```let toDos```로 바꿔준다.
- ```toDos```에 localstorage의 값들을 배열로 담아준다.
- ```parsedToDos```배열에 담긴 요소들 하나하나에 ```paintToDo```를 실행시킨다.

<br>

## Deleting To Dos (localStorage)
localstorage에 저장된 todolist를 삭제하고, 화면에서도 삭제시켜준다.

<br>

> todo.js

```javascript
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY =  'todo';

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // -> 클릭한 li.id와 다른 toDo.id는 남겨둔다. 
    li.remove();
    saveToDo();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text; 
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo, 
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

```
- list를 삭제하기 위해서, 선택된 list가 무엇인지 알아야 하기 때문에 구별을 위해 **id** 값을 부여해준다.
   - ```Date.now()``` : 밀리초(1000분의 1초)를 주는 함수, 랜덤한 숫자를 준다.
   -  ```const newTodo = toDoInput.value;``` 는 string 형식
   -  ```const newTodoObj = {text: newTodo, id: Date.now()} 와 같이 object 형식으로 변경한다.

<hr>







