//==========SIGN-UP==========
document.getElementById('signup-btn').addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    //const error = document.getElementById('signup-error');

    if (email && username && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, username, password}),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Sign Up Successful! Redirecting to Login page...');
                document.getElementById('signup-name').value = '';
                document.getElementById('signup-email').value = '';
                document.getElementById('signup-password').value = '';
                //error.style.display = 'none';
                //document.getElementById('signup').classList.add('hidden');
                //document.getElementById('login').classList.remove('hidden');
            } else {
                //error.textContent = data.message || 'Sign Up Failed!';
                //error.style.display = 'block';
                alert(data.message);
            }
        } catch (err) {
            /*error.textContent = 'An error occurred. Please try again later.';
            error.style.display = 'block';*/
            alert(err.message);
        }
    } else {
        /*error.textContent = 'All fields are required!';
        error.style.display = 'block';*/
        alert('All fields are required!');
    }
});

//==========LOGIN==========
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    //const error = document.getElementById('login-error');

    if (email && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Welcome back, ${data.user.name}!`);
                error.style.display = 'none';
                localStorage.setItem('user', JSON.stringify(data));

                window.location.href = './index.html';
            } else {
                error.textContent = data.message || 'Invalid email or password.';
                error.style.display = 'block';
            }
        } catch (err) {
            //error.textContent = 'An error occurred. Please try again later.';
            //error.style.display = 'block';
            alert(err.message);
        }
    } else {
        //error.textContent = 'All fields are required!';
        //error.style.display = 'block';
        alert("All fields are required!")
    }
});