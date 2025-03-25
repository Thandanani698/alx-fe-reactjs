import { useState } from "react";
import { fetchUserData } from "../services/githubService"; 

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError("");

    try {
      const results = await fetchUserData(query); 
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find the user");
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
