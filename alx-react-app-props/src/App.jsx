// src/App.jsx
import ProfilePage from "./components/ProfilePage";
import { UserProvider } from "./components/UserContext";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
