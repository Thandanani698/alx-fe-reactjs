// src/components/UserProfile.jsx

import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);
  
  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
