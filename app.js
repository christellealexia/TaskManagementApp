// document.addEventListener('DOMContentLoaded', function() {
//     // Load tasks from localStorage
//     loadTasksFromLocalStorage();
//   });
//   function loadTasksFromLocalStorage() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.forEach(task => {
//       addTaskToList(task);
//     });
//   }
  
//   function addTaskToList(task) {
//     const li = document.createElement('li');
//     li.textContent = task.title;
//     document.getElementById('task-list').appendChild(li);
//   }
//   function addTask() {
//     const input = document.getElementById('task-input');
//     const taskTitle = input.value.trim();
//     if (!taskTitle) return;
  
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push({ title: taskTitle, completed: false });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
  
//     input.value = '';
//     addTaskToList(taskTitle);
//   }
//   function toggleTaskCompletion(task) {
//     task.completed =!task.completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     updateTaskList();
//   }
  
//   function updateTaskList() {
//     const taskList = document.getElementById('task-list');
//     taskList.innerHTML = ''; // Clear the list
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.forEach(task => {
//       const li = document.createElement('li');
//       li.textContent = task.title;
//       if (task.completed) {
//         li.style.textDecoration = 'line-through';
//       }
//       li.onclick = () => toggleTaskCompletion(task);
//       taskList.appendChild(li);
//     });
//   }
//   function deleteTask(task) {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const index = tasks.indexOf(task);
//     if (index > -1) {
//       tasks.splice(index, 1);
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       updateTaskList();
//     }
//   }

document.addEventListener('DOMContentLoaded', function() {
  const addTaskForm = document.getElementById('add-task-form');
  const taskList = document.getElementById('task-list');

  addTaskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('task-title').value;
      const description = document.getElementById('task-description').value;
      const dueDate = document.getElementById('task-due-date').value;
      const task = { title, description, dueDate, completed: false };

      // Add task to the list
      const listItem = document.createElement('li');
      listItem.textContent = `${title} - ${description} - ${dueDate}`;
      taskList.appendChild(listItem);

      // Clear the form
      addTaskForm.reset();
  });

  // Example function to mark a task as completed
  function markTaskAsCompleted(task) {
      task.completed = true;
      taskList.textContent += `\n${task.title} marked as completed`;
  }

  // Example function to delete a task
  function deleteTask(task) {
      taskList.removeChild(task);
  }
});
