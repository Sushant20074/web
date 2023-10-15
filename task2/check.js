document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }
      // Proceed with user login
    alert('Login successful!');
    // Redirect to another page or perform any other necessary actions
});
