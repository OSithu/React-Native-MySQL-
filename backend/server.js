// server.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const PORT = 3000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Use user routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
