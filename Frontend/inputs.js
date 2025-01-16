//==========LOGIN==========
const loginBtn = document.getElementById("login-btn"); //get login button
const alertMessage = document.getElementById("alert-p"); //get p tag with #alert

loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

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
        alertMessage.style.display = 'block';
        alertMessage.style.color = '#299CF9';
        alertMessage.innerHTML = "Hello! You are now logged in.";
    } else {
        console.error("Login failed:", data);
        alertMessage.style.display = 'block';
        alertMessage.style.color = 'red';
        alertMessage.innerHTML = "Login failed:", data;
    }
});


//==========SIGN-IN==========
const signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("signup-email").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const alertMessage = document.getElementById("alert-p");

    const response = await fetch("http://localhost:4000/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alertMessage.style.display = 'block';
        alertMessage.style.color = '#299CF9';
        alertMessage.innerHTML = `Welcome ${username}! You may now log in.`;
    } else {
        alertMessage.style.display = 'block';
        alertMessage.style.color = 'red';
        alertMessage.innerHTML = "Error:", data;
    }
});
