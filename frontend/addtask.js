if(localStorage.getItem('loggedIn') !== 'true'){
    window.location.href = 'login.html';
  }
  
  document.getElementById('addTaskForm').addEventListener('submit', function(e){
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = {
      title: document.getElementById('title').value,
      description: document.getElementById('desc').value,
      status: document.getElementById('priority').value
    };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task added!');
    window.location.href = 'dashboard.html';
  });
  
  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
  });
  
