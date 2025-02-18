// src/components/UserDetails.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const { user } = useContext(UserContext); // Using useContext to get user data

  return (
    <div className="user-info">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
