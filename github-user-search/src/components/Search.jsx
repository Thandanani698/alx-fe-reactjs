import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await fetchUsers(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <input
          type="text"
          placeholder="Location (Optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <input
          type="number"
          placeholder="Min Repos (Optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-white">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl text-white font-bold mb-2">Results:</h3>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="bg-gray-700 p-4 rounded-lg shadow-md text-white">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full inline-block mr-4" />
                <span className="font-semibold">{user.login}</span>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-4">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
