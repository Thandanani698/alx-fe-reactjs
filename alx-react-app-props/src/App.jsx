// src/App.jsx
import { UserProvider } from './components/UserContext.jsx'; // Import UserProvider
import ProfilePage from './components/ProfilePage.jsx';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
