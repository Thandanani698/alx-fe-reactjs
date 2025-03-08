// src/api.js

// This function will send the registration data to your backend API
export const submitRegistration = async (values) => {
    try {
      // Sending POST request to the API (adjust the URL to your actual endpoint)
      const response = await fetch('https://your-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send the form data as JSON
      });
  
      if (!response.ok) {
        // If response is not ok (status not 2xx), throw an error
        throw new Error('Failed to register user');
      }
  
      const data = await response.json(); // Parse the JSON response
      return data; // Return the data from the response (could be user details, success message, etc.)
    } catch (error) {
      // If an error occurs, log it and throw the error
      console.error('Error during registration:', error);
      throw error; // This will be caught in the Formik form and shown as an error message
    }
  };
  