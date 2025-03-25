import axios from 'axios';

const fetchUserData = async (username, location = '', minRepos = '') => {
  let query = `user:${username}`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

  if (response.data.items.length > 0) {
    return response.data.items[0]; 
  } else {
    throw new Error('No user found');
  }
};

export default { fetchUserData };
