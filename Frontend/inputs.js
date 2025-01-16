// For signup page
const signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("signup-email").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const response = await fetch("http://localhost:4000/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log("User created:", data);
    } else {
        console.error("Error:", data);
    }
});

// For login page
const loginBtn = document.getElementById("login-btn");  // Make sure you're targeting the correct button
loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Log the data to confirm it's being captured correctly
    console.log("Login Data:", { email, password });

    const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Login successful:", data);
        alert("Hello!")
    } else {
        console.error("Login failed:", data);
    }
});
