import React from "react";
import ProfilePage from "./components/ProfilePage"; 
import { UserProvider } from "./UserContext"; // This should now work!

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
