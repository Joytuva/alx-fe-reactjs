import React from "react";

/* Example Recipe Card Component */
function RecipeCard({ title, description }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4 hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

/* Main App Component */
function App() {
  const recipes = [
    { title: "Spaghetti Bolognese", description: "Classic Italian pasta dish." },
    { title: "Chicken Curry", description: "Spicy and creamy Indian curry." },
    { title: "Chocolate Cake", description: "Rich and moist dessert." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        Recipe Sharing Platform
      </h1>

      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
