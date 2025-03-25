import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';  

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    console.log('User data:', response.data);  
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);  
    throw new Error('User not found');  
  }
};
