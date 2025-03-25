import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure correct import

const Search = () => {
  const [query, setQuery] = useState(""); // Username search term
  const [location, setLocation] = useState(""); // Location search term
  const [minRepos, setMinRepos] = useState(""); // Minimum repositories search term
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError("");

    try {
      const results = await fetchUserData(query, location, minRepos); 
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Search by location"
          className="p-2 border rounded ml-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)} 
          placeholder="Min Repositories"
          className="p-2 border rounded ml-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full inline" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="ml-2">
              {user.login}
            </a>
            <p>{user.location ? `Location: ${user.location}` : "Location not provided"}</p> {/* Display location */}
            <p>Repos: {user.public_repos}</p> {/* Display number of repositories */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
