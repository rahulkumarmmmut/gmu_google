// Function to open a new window (pop-up) for bus schedules
function openBusSchedule(busPage) {
    window.open(busPage, "_blank", "width=500,height=400");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // === Register Form Logic ===
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent page reload
  
      const username = document.getElementById('registerUsername').value.trim();
      const password = document.getElementById('registerPassword').value;
  
      // 1. Check username length >= 15
      if (username.length < 15) {
        alert("Username must be at least 15 digits long.");
        return;
      }
      
      // 2. Check username is digits only
      const digitsOnlyRegex = /^\d+$/;
      if (!digitsOnlyRegex.test(username)) {
        alert("Username must contain digits only (0-9).");
        return;
      }
  
      // 3. Check password length >= 25
      if (password.length < 25) {
        alert("Password must be at least 25 characters long.");
        return;
      }
  
      // If all checks pass:
      alert("Registration successful!\n\nUsername: " + username + 
            "\nPassword length: " + password.length);
      
      // Clear the form (optional)
      registerForm.reset();
    });
  
    // === Login Form Logic ===
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // In a real app, you'd verify credentials with a server or local storage.
      // For now, we always show a 'successful' message and redirect.
      alert("Login successful!\n\nRedirecting to new page...");
  
      // Redirect to a new local page (dashboard.html) or an external link
      // e.g., window.location.href = "https://example.com";
      window.location.href = "dashboard.html";
    });
  });