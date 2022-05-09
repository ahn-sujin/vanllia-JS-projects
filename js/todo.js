const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoButton = todoForm.querySelector('button')
const todolist = document.querySelector('#todo-list');

const STORAGE_KEY = '할 일';
const CHECK_CLASS_NAME = 'on';

let toDos = [];
const savedToDos = localStorage.getItem(STORAGE_KEY);

function checkToDo(event){
    const checkToDoList = event.target;
    let parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach((obj, index) => {
        if(obj.id === parseInt(checkToDoList.value)){
            if(checkToDoList.checked){
                toDos[index].check = true;
            } else {
                toDos[index].check = false;
            }
        }
    });
    saveToDo();
}

function deleteToDo(event){
    const deleteToDoList = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteToDoList.id));
    deleteToDoList.remove();
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos));
}

function paintToDo(todo){
    const li = document.createElement('li');
    li.id = todo.id;

    const span = document.createElement('span');

    const input = document.createElement('input');
    input.classList.add('check');
    input.type="checkbox";
    input.id = `check${todo.id}`;
    input.value = todo.id;
    if(todo.check){
        input.checked = true;
    }

    const label = document.createElement('label');
    label.innerText = todo.text;
    label.htmlFor = `check${todo.id}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');

    // const timeWritten = document.createElement('span');
    // timeWritten.classList.add('time-written');
    // const DATE = new Date(); 
    // const getHours = String(DATE.getHours()).padStart(2,'0');
    // const getMinutes = String(DATE.getMinutes()).padStart(2,'0');
    // const getSeconds = String(DATE.getSeconds()).padStart(2,'0');
    // timeWritten.innerText =  `작성시간: ${getHours}:${getMinutes}:${getSeconds}`;

    // const dateWritten = document.createElement('span');
    // dateWritten.classList.add('date-written');
    // const getYear = DATE.getFullYear();
    // const getMonth = String(DATE.getMonth()).padStart(2,'0');
    // const getDate = String(DATE.getDate()).padStart(2,'0');
    // dateWritten.innerText = `작성일: ${getYear}.${getMonth}.${getDate}`;

    todolist.appendChild(li);
    li.appendChild(span);
    span.appendChild(input);
    span.appendChild(label);
    li.appendChild(deleteButton);
    // li.appendChild(timeWritten);
    // li.appendChild(dateWritten);

    deleteButton.addEventListener('click', deleteToDo);
    const toDoCheckBox = document.querySelectorAll('.check');
    toDoCheckBox.forEach((checkbox) => {
        checkbox.addEventListener('change', checkToDo);
    })
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = '';
    const newToDoObj = {
        text: todo,
        id: Date.now(),
        check: false
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener('submit', handleToDoSubmit);
todoButton.addEventListener('click', handleToDoSubmit);

if(savedToDos !== null){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}
