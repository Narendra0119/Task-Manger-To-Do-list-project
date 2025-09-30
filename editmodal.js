if(localStorage.getItem('loggedIn') !== 'true'){
    window.location.href = 'login.html';
  }
  
  const editIndex = localStorage.getItem('editIndex');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  document.getElementById('title').value = tasks[editIndex].title;
  document.getElementById('desc').value = tasks[editIndex].description;
  document.getElementById('priority').value = tasks[editIndex].status;
  
  document.getElementById('editTaskForm').addEventListener('submit', function(e){
    e.preventDefault();
    tasks[editIndex].title = document.getElementById('title').value;
    tasks[editIndex].description = document.getElementById('desc').value;
    tasks[editIndex].status = document.getElementById('priority').value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task updated!');
    window.location.href = 'dashboard.html';
  });
  
  document.getElementById('cancelBtn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
  });

