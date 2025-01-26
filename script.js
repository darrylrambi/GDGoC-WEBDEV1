function addTask() {
  const input = document.getElementById('formInput');
  const inputValue = input.value;

  const task = document.createElement('li');
  task.textContent = inputValue;
  task.classList.add('listItem');
  task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener('click', function () {
    deleteTask(task.id);
  })

  task.appendChild(deleteButton);

  const taskContainer = document.getElementById('taskContainer');

  taskContainer.appendChild(task);
  input.value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}