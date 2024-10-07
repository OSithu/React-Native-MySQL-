// controllers/userController.js
const db = require('../config/db'); // Assuming you create a config file for DB connection

// Get all users
const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Export the controller functions
module.exports = {
  getAllUsers,
};
