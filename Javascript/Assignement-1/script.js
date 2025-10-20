// Store tasks here
let tasks = [];

// Get form and table
let form = document.getElementById('myForm');
let table = document.getElementById('taskTable');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get input values
    let taskName = document.getElementById('title').value;
    let taskPriority = document.getElementById('priority').value;

    // Create task object
    let task = {
        name: taskName,
        priority: taskPriority
    };
    tasks.push(task);//added task to array
    console.log(tasks);

    // Show tasks
    showTasks();
});

// FUNCTION: Show all tasks in table
function showTasks() {

}