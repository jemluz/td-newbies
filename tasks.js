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
  tasksList.appendChild(newTask);
}

// complete task
function taskCompleted(event){
  console.log('Complete Task...');
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
