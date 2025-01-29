function addTask() {
  const input = document.getElementById('formInput');
  const inputValue = input.value;

  const task = document.createElement('li');
  task.textContent = inputValue;
  task.classList.add('listItem');
  task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);

  // delete button control
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener('click', function () {
    deleteTask(task.id);
  })

  // edit button control
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('editButton');
  editButton.addEventListener('click', function () {
    editTask(task.id);
  })

  task.appendChild(editButton);
  task.appendChild(deleteButton);

  const taskContainer = document.getElementById('taskContainer');

  taskContainer.appendChild(task);
  input.value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id) {
  const button = document.getElementById('addButton');
  button.textContent = "Simpan";

  const task = document.getElementById(id);
  const input = document.getElementById('formInput');
  const inputValue = input.value;
  

  const taskText = task.firstChild.textContent;

  inputValue = taskText.trim();

  button.onclick = function () {
    task.firstChild.textContent = inputValue;
    inputValue = '';
    button.textContent = "Add";
    button.onclick = addTask;
  };

}