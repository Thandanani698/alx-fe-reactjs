// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
