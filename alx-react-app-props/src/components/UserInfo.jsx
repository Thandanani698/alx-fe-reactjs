import React, { useContext } from 'react';
import UserContext from './UserContext';
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext); // Access userData from UserContext

  return (
    <div>
      <h2>User Info</h2>
      <UserDetails userData={userData} />
    </div>
  );
}

export default UserInfo;
