
// Import the MySQL library
const mysql = require('mysql2/promise');

// Define the database connection configuration
const dbConfig = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Create a connection pool using the configuration
const pool = mysql.createPool(dbConfig);

// Export the connection pool for reuse in other modules
module.exports = pool;

