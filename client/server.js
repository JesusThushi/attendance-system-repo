const express = require('express');
const app = express();
const path = require('path');

app.use(cors()); // Enables CORS for all routes
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5500/login.html',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));


app.listen(5000, () => {
    console.log('Server running on port 5000');
});


// Serve static files
app.use(express.static(path.join(__dirname, 'client')));

// Simple API route for demonstration
app.use(express.json());
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ token: 'mock-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
