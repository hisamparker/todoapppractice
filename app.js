
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
