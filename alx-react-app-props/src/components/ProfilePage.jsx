import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

function ProfilePage() {
  const user = useContext(UserContext);  // Use the context

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="user-info">
        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
