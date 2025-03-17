import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split('\n').length < 2) newErrors.ingredients = 'Please provide at least two ingredients';
    if (!preparation) newErrors.preparation = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // If validation passes, clear the errors and proceed with submission
    setErrors({});
    console.log('Form submitted:', { title, ingredients, preparation });

    // Clear the form after submission
    setTitle('');
    setIngredients('');
    setPreparation('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Recipe</h2>

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
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
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
          {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
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
          {errors.preparation && <p className="text-red-500 text-sm mt-2">{errors.preparation}</p>}
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
