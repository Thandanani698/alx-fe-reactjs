// src/App.jsx
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext"; // Import UserContext
import { useState } from "react";
import "./App.css"; // Ensure CSS is imported

function App() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
