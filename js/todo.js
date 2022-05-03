const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoButton = todoForm.querySelector('button')
const todolist = document.querySelector('#todo-list');

const STORAGE_KEY = '할 일';

let toDos = [];

function deleteToDo(event){
    const deleteToDoList = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteToDoList.id));
    deleteToDoList.remove();
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos));
}

function paintToDo(todo){
    const li = document.createElement('li');
    li.id = todo.id;
    const span = document.createElement('span');
    span.innerText = todo.text;
    const checkButton = document.createElement('button');
    checkButton.classList.add('check'); 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    
    todolist.appendChild(li);
    li.appendChild(span);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = '';
    const newToDoObj = {
        text: todo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);
todoButton.addEventListener('click', handleToDoSubmit);

const savedToDos = localStorage.getItem(STORAGE_KEY);
if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}
