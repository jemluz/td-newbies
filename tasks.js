let tasksData = [
  {
    id: 1,
    name: 'Ver se eu tô na esquina',
    toDo: true
  },
  {
    id: 2,
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
