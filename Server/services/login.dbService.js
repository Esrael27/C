// dbService.js

// Import the connection pool from dbConfig.js
const pool = require('../config/db.config');

// Function to execute a SQL query
async function executeQuery(sql, params) {
  try {
    // Use the connection pool to execute the query
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Error executing MySQL query:', error);
    throw error;
  }
}

// Export the function for reuse in other modules
module.exports = {
  executeQuery,
};

