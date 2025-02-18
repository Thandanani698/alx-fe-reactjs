import "./App.css"; // Import the CSS file
import ProfilePage from "./components/ProfilePage";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
