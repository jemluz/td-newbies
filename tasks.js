// id generator
function uid() {
  return Date.now().toString(16) + Math.random().toString(16).substr(2);
}

let tasksData = [
  {
    id: uid(),
    name: 'Ver se eu tô na esquina',
    toDo: true
  },
  {
    id: uid(),
    name: 'Dar banho nos gatos',
    toDo: false
  }
];

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const tasksList = document.getElementById("tasks_list");

// new task item
function createNewTaskEl(taskName, taskId) {
  // create task div
  let task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("todo");
  task.setAttribute("id", taskId);

  // create .left_content div
  let left_content = document.createElement("div");
  left_content.classList.add("left_content");

  let todoIcon = document.createElement("i");
  todoIcon.classList.add("ph-duotone");
  todoIcon.classList.add("ph-circle-dashed");
  todoIcon.classList.add("check_btn");
  todoIcon.addEventListener("click", taskCompleted);
  // todoIcon.setAttribute("onclick", taskCompleted);

  let doneIcon = document.createElement("i");
  doneIcon.classList.add("ph-duotone");
  doneIcon.classList.add("ph-check-circle");
  doneIcon.classList.add("check_btn");
  doneIcon.classList.add("hidden");
  doneIcon.addEventListener("click", taskIncomplete);
  // doneIcon.setAttribute("onclick", taskIncomplete);

  let name = document.createElement("p");
  name.innerText = taskName;

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ph-duotone");
  deleteIcon.classList.add("ph-trash");
  deleteIcon.classList.add("delete_btn");
  deleteIcon.addEventListener("click", deleteTask);
  // deleteIcon.setAttribute("onclick", deleteTask);

  left_content.appendChild(todoIcon);
  left_content.appendChild(doneIcon);
  left_content.appendChild(name);

  task.appendChild(left_content);
  task.appendChild(deleteIcon);

  return task;
}

// new task
function addTask(event) {
  console.log('Add Task');

  event.preventDefault();

  const taskName = event.target.value;

  const newTask = {
    id: uid(),
    name: taskName,
    toDo: true
  }

  tasksData.push(newTask);

  const taskElement = createNewTaskEl(newTask.name, newTask.id);
  tasksList.appendChild(taskElement);
}

// complete task
function taskComplete(event){
  console.log('Complete Task...');

  const todoIcon = event.target;
  todoIcon.classList.add("hidden");

  // this (icon) -> parentNode (.left_conteft) -> doneIcon [1]
  const doneIcon = todoIcon.parentNode.childNodes[1];
  doneIcon.classList.remove("hidden")
}

// incomplete task
function taskIncomplete(event) {
  console.log('Incomplete Task...');
}

// delete task
function deleteTask(event) {
  console.log('Delete Task');
}

// sync HTML with tasksData list
