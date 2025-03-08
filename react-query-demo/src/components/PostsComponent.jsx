import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const PostsComponent = () => {
  // Fetch posts using useQuery with options for caching and refetching
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', // Query key
    fetchPosts, // Data fetching function
    {
      cacheTime: 600000, // Cache for 10 minutes
      staleTime: 300000, // Data will be fresh for 5 minutes
      refetchOnWindowFocus: false, // Disable refetch on window focus
      keepPreviousData: true, // Keep previous data while refetching
    }
  );

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error handling
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
