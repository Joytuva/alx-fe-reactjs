import React from "react";

function RecipeCard({ title, summary, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 hover:shadow-xl hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{summary}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
