// src/components/UserDetails.jsx
import { useContext } from "react";
import UserContext from "./UserContext"; // Import the UserContext

function UserDetails() {
  const { user } = useContext(UserContext); // Use the context to get the user data

  return (
    <div className="user-info">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
