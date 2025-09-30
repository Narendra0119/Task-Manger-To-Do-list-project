document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created! Please login.');
    window.location.href = 'login.html';
  });
  