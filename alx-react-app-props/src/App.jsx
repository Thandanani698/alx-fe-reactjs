// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './components/UserContext';  // Ensure the import path is correct

function App() {
  return (
    <UserProvider>  {/* Wrap the ProfilePage component with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
