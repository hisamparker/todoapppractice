
const totalCount = document.getElementById(`total-count`);
      
const totalToDos = document.getElementsByClassName(`todo`).length;

totalCount.innerHTML = totalToDos;