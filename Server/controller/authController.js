// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library for JWT

const pool = require('../config/db.config');

async function loginUser(req, res) {
  
  const {password } = req.body;

  try {
    // Retrieve user from the database (assuming a single user scenario)
    const selectQuery = 'SELECT * FROM user LIMIT 1';
    const [rows] = await pool.query(selectQuery);

    // Check if the user exists
    if (rows.length === 0) {
      return res.status(401).json({ error: 'No user found or invalid credentials' });
    }

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, rows[0].password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: rows[0].username, userId: rows[0].id }, 'Fair-enjoy-Hack', {
      expiresIn: '1h', // Token expiration time
    });

    // Include the token in the response
    res.status(200).json({ message: 'Login successful', token});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  loginUser,
};
