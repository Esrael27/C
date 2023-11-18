// authRoutes.js

// Import the Express library
const express = require('express');

// Import the loginUser function from authController.js
const authController = require('../controller/authController');

// Create an Express Router
const router = express.Router();

// Define the login route
router.post('/login', authController.loginUser);

// Export the router for use in other modules
module.exports = router;

