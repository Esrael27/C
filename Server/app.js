// Import the dotenv module and call the config() method 
require('dotenv').config();

// Import the express module 
const express = require('express');

// Import the routes
const routes = require('./routes/authRoutes');

// Create the express app 
const app = express();

// Import the CORS package
const cors = require('cors');
// Add the CORS middleware to the middleware chain
app.use(cors());

// Use the express.json() middleware to parse the request body 
app.use(express.json());

// Add the routes to the middleware chain
app.use(routes);

// Get the port from the environment variable 
const port = process.env.PORT || 3000; // Set a default port if not provided

// Set up the listener 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


