document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if(storedUser && storedUser.email === email && storedUser.password === password){
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials!');
    }
  });
  
