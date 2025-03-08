// src/api.js

export const submitRegistration = async (values) => {
  // Assuming you are using fetch or axios to send the form data to your API
  try {
    const response = await fetch('https://your-api-endpoint.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    
    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    return data; // Return response data from API (e.g., user details or a success message)
  } catch (error) {
    throw error; // Handle error by throwing it
  }
};
