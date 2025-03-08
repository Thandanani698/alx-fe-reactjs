// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Advanced</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<BlogPost />} />
          <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
