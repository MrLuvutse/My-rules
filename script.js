document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            // Retrieve stored user data
            const storedUser = localStorage.getItem(username);
            
            if (storedUser && storedUser === password) {
                alert("Login Successful!");
                errorMessage.textContent = "";
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        });
    }

    // Handle Signup
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;
            const signupMessage = document.getElementById("signupMessage");

            // Check if username already exists
            if (localStorage.getItem(newUsername)) {
                signupMessage.textContent = "Username already taken. Choose another.";
                signupMessage.style.color = "red";
            } else {
                // Store the user
                localStorage.setItem(newUsername, newPassword);
                signupMessage.textContent = "Signup Successful! You can now log in.";
                signupMessage.style.color = "green";

                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            }
        });
    }
});
