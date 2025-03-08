// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = false; // Simulating authentication
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
