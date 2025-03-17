// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // To navigate back to the home page

  // Fetch the recipe details based on the id
  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(selectedRecipe);
    };

    fetchRecipe();
  }, [id]); // Re-fetch data if the id changes

  if (!recipe) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white p-2 rounded-lg mb-6"
      >
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover mb-4"
        />
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <ul className="list-disc pl-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Cooking Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
