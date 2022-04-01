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