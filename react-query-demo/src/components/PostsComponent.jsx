import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's useQuery hook to fetch posts
  const { data, error, isLoading, isFetching, refetch } = useQuery('posts', fetchPosts, {
    // Caching and refetching options
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 2, // Data considered fresh for 2 minutes
    refetchOnWindowFocus: true, // Refetch data when the window is focused
    keepPreviousData: true, // Keep the previous data while new data is loading
  });

  // Handle loading, error, and successful data fetching
  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Data'}
      </button>
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
