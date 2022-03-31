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