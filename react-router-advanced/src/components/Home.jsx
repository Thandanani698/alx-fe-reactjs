// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}

export default Home;
