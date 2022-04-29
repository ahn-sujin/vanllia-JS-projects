const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const STORAGE_KEY = '할 일';

let toDos = [];

function checkToDo(event){
    const checkToDoList = event.target.parentElement;
    checkToDoList.classList.toggle('on');
}

function deleteToDo(event){
    const deleteToDoList = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteToDoList.id))
    deleteToDoList.remove();
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    li.id = newToDo.id;
    span.innerText = newToDo.text;
   
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    
    checkButton.classList.add('check');
    deleteButton.classList.add('delete');

    checkButton.addEventListener('click', checkToDo);
    deleteButton.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(STORAGE_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
