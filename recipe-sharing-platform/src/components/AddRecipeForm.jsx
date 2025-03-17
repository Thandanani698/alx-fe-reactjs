
import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !preparation) {
      setError('All fields are required');
      return;
    }

    
    const ingredientsList = ingredients.split('\n');
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients');
      return;
    }

    
    setError('');
    console.log('Form submitted:', { title, ingredients: ingredientsList, preparation });


    setTitle('');
    setIngredients('');
    setPreparation('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Recipe</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Enter ingredients (separate by new lines)"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="preparation" className="block text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Enter preparation steps"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
