
function updateCounters() {
    const totalCount = document.getElementById(`total-count`);
    const totalToDos = document.getElementsByClassName(`todo`).length;
    totalCount.innerHTML = totalToDos;

    const completedCount = document.getElementById(`completed-count`);
    const completedTodos = document.getElementsByClassName(`completed`).length;
    completedCount.innerHTML = completedTodos;

    const todoCount = document.getElementById(`todo-count`);
    const uncompletedTodos = totalToDos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
}

updateCounters()

function toggleDone() {
    const checkbox = this;

    if (checkbox.checked) {
        checkbox.parentElement.className = `todo completed`;
    } else {
        checkbox.parentElement.className = `todo`;
    }

    updateCounters();
}

function submitTodo() {
    const inputField = document.getElementById(`new-todo`);
    const newTodoTitle = inputField.value;
    
    createTodo(newTodoTitle);

    inputField.value = null;

    updateCounters();
}

function createTodo(title) {
    const listItem = document.createElement('li');
    listItem.className = 'todo'

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + nextTodoId();
    checkbox.checked = false;

    checkbox.onchange = toggleDone.bind(checkbox);
    listItem.appendChild(checkbox);

    const space = document.createTextNode(' ');
    listItem.appendChild(space);

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.innerHTML = title;
    listItem.appendChild(label);

    const list = document.getElementById('todolist');
    list.appendChild(listItem);
}

function nextTodoId() {
    return document.getElementsByClassName('todo').length + 1;
}

