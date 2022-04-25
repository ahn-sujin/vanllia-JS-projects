const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoButton = toDoForm.querySelector('.todo-btn');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = '할 일';

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(event){
    const checkToDoList = event.target.parentElement;
    checkToDoList.classList.toggle('on');
}

function deleteToDo(event){
    const deleteToDoList = event.target.parentElement;
    deleteToDoList.remove();
}

function paintToDo(newToDo){
    const li =  document.createElement('li');
    const span = document.createElement('span');
    const buttonCheck = document.createElement('button');
    const buttonDelete = document.createElement('button');

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(buttonCheck);
    li.appendChild(buttonDelete);

    span.innerText = newToDo;

    buttonCheck.classList.add('check');
    buttonDelete.classList.add('delete');

    buttonCheck.addEventListener('click', checkToDo);
    buttonDelete.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}
toDoForm.addEventListener('submit', handleToDoSubmit);
toDoButton.addEventListener('click', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}