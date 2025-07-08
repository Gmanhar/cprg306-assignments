"use client";

import { useState, useEffect } from "react";

// External fetch function
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-orange-500 text-white rounded-md">
      <h2 className="text-2xl font-bold mb-3">
        Meal Ideas with "{ingredient}"
      </h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="text-lg">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
