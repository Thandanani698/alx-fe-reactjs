import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './components/UserContext'; // Import UserProvider
import './App.css';  // Import the CSS file

function App() {
  return (
    <UserProvider> {/* Wrap the ProfilePage component with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
