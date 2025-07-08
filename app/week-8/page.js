"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

 
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .split(" ")[0]
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-900 min-h-screen p-4">
      <h1 className="text-stone-50 font-semibold text-4xl mb-4">
        Shopping List
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="lg:w-1/2">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-gray-400 italic mt-4">
              Click an item to get meal ideas.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
