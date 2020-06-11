// Define UI Variables 
const taskInput = document.querySelector('#task');      //the task input text field
const form = document.querySelector('#task-form');        //The form at the top
const filter = document.querySelector('#filter');      //the task filter text field
const taskList = document.querySelector('.collection');   //The UL
const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

// Loading the event listenr 
loadEventListeners();



function loadEventListeners()
{



    form.addEventListener('submit', addNewTask);
}


function addNewTask(e)
{
    // Check empty entry
if(taskInput.value === '')
{
     alert('Enter New Task');
     return;
}

// Create an li element when the user adds a task 
const li = document.createElement('li');
// Adding a class
li.className = 'collection-item';
// Create text node and append it 
li.appendChild(document.createTextNode(taskInput.value));
// Create new element for the link 
const link = document.createElement('a');
// Add clas and the x marker for a 
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"> </i>';
// Append link to li
li.appendChild(link);
// Append to UL 
taskList.appendChild(li);
taskInput.value = '';
e.preventDefault();
}