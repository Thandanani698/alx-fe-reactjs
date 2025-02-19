// src/components/UserDetails.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const { user } = useContext(UserContext); // Getting user data from context

  return (
    <div className="user-info">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
