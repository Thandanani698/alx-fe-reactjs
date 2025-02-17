// src/components/UserDetails.jsx
import { useContext } from 'react';
import UserContext from './UserContext.jsx'; // Import UserContext

function UserDetails() {
  const { user } = useContext(UserContext); // Consume Context

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
