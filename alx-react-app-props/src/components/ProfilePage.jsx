// src/components/ProfilePage.jsx
import UserInfo from './UserInfo';
import { useContext } from 'react';
import UserContext from './UserContext';

function ProfilePage() {
  const { user } = useContext(UserContext); // Consume context here

  return <UserInfo user={user} />;
}

export default ProfilePage;
