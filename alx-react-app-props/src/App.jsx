// src/App.jsx
import { UserProvider } from './components/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
