// api.js
import axios from 'axios';
import memoize from 'memoize-one';

const API_URL = 'http://10.0.2.2:3000';

// Memoized function to fetch the login user token
export const loginUser = memoize(async (password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { password });
    return response.data.token;
  } catch (error) {
    throw error;
  }
});

// Function to handle login errors
export const handleLoginError = (error) => {
  console.error('Login error:', error.message);

  let errorMessage = 'An error occurred while logging in. Please try again later.';

  if (axios.isAxiosError(error)) {
    errorMessage = 'A network error occurred. Please check your internet connection and try again.';
  }

  alert(errorMessage);
};

