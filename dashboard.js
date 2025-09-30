if(localStorage.getItem('loggedIn') !== 'true'){
    window.location.href = 'login.html';
  }
  
  const taskList = document.getElementById('taskList');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  function renderTasks(){
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const div = document.createElement('div');
      div.className = `task ${task.status}`;
      div.innerHTML = `
        <span>${task.title}</span>
        <span>${task.status}</span>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(div);
    });
  }
  
  function editTask(index){
    localStorage.setItem('editIndex', index);
    window.location.href = 'editmodal.html';
  }
  
  function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
  
  document.getElementById('addTaskBtn').addEventListener('click', () => {
    window.location.href = 'addtask.html';
  });
  
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  });
  
  renderTasks();
