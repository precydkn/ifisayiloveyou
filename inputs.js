const API_BASE_URL = "http://localhost:4000"; // Replace with your actual backend URL

// Handle signup
async function handleSignup() {
    const email = document.getElementById("signup-email").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert("Signup successful!");
            window.location.href = "login.html";
        } else {
            alert(result.message || "Signup failed!");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred while signing up.");
    }
}

// Handle login
async function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert("Login successful!");
            // Redirect or perform actions after login
        } else {
            alert(result.message || "Login failed!");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred while logging in.");
    }
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.getElementById("signup-btn");
    const loginButton = document.getElementById("login-button"); // Update if multiple buttons exist

    if (signupButton) signupButton.addEventListener("click", handleSignup);
    if (loginButton) loginButton.addEventListener("click", handleLogin);
});