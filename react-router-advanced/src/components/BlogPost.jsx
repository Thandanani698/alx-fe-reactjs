// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Get the dynamic 'id' parameter

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* You can fetch and display content based on the ID */}
      <p>Displaying content for blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
