const API_URL = 'http://localhost:8080/api';

// Login function
async function login(username, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.text();
            localStorage.setItem('token', data); // Store the token
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        document.getElementById('message').textContent = error.message;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('token'); // Remove the token
    window.location.href = 'index.html'; // Redirect to login page
}

// Session check for home.html
function checkSession() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'index.html'; // Redirect to login if no token
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Login form event listener
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            login(username, password);
        });
    }

    // Logout button event listener
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    // Session check for home.html
    if (window.location.pathname.endsWith('home.html')) {
        checkSession();
    }
});