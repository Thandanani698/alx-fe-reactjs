import axios from "axios";

const API_URL = "https://api.github.com/search/users";

export const fetchUsers = async (username, location, minRepos) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(`${API_URL}?${query}&per_page=10`);
    return response.data.items; 
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("User not found");
  }
};
