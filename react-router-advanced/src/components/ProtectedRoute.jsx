// src/components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';  // Import Navigate instead of Redirect
import { useAuth } from '../hooks/useAuth'; // Import the useAuth hook

// This component will protect routes by checking authentication
function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}  // Use Navigate to redirect
    />
  );
}

export default ProtectedRoute;
