// config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       // Replace with your MySQL host
  user: 'rootnew',        // Replace with your MySQL username
  password: 'SITHu@2024', // Replace with your MySQL password
  database: 'mobileapp',   // Replace with your MySQL database name
  port: 3307 
});

// Check database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = db;
