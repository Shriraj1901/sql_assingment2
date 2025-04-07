require('dotenv').config(); // Load environment variables

const express = require('express');
const mysql = require('mysql2');

const app = express();

// Load environment variables for the port
const PORT = process.env.PORT || 3000;

// Debugging: Log environment variables to confirm they are loaded correctly
console.log('Environment variables loaded:');
console.log({
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD ? '*******' : null, // Mask the password for security
  DB_NAME: process.env.DB_NAME,
});

// Create a connection to the database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database successfully!');
});

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});