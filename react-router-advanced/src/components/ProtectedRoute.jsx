// src/components/ProtectedRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import the useAuth hook

// This component will protect routes by checking authentication
function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Redirect to="/login" />}
    />
  );
}

export default ProtectedRoute;
