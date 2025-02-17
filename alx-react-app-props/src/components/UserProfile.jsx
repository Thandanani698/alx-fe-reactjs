import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
