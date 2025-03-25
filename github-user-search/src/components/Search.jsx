import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="User Avatar" width={100} />
          <p>Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.html_url}</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;
