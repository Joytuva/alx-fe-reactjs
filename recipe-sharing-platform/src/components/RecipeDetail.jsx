import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Recipe not found.
      </div>
    );
  }

  // Example ingredients and instructions
  const ingredients = [
    "1 cup flour",
    "2 eggs",
    "1/2 cup milk",
    "Salt to taste"
  ];
  const instructions = [
    "Preheat oven to 180°C.",
    "Mix ingredients together.",
    "Bake for 25 minutes.",
    "Serve hot."
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 max-w-4xl mx-auto">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {instructions.map((step, index) => (
            <li key={index} className="mb-1">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
