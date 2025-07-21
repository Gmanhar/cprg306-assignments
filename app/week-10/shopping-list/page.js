"use client";

import { useState,useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth(); // Get user from auth context

  const loadItems = async () => {
  if (!user) return; // make sure user is logged in
  const fetchedItems = await getItems(user.uid);
  setItems(fetchedItems);
};

useEffect(() => {
  loadItems();
}, [user]); // Runs when user is available (after login)
 
const handleAddItem = async (item) => {
  if (!user) return;

  try {
    const id = await addItem(user.uid, item); // Save to Firestore
    const newItemWithId = { id, ...item };

    setItems((prevItems) => [...prevItems, newItemWithId]); // Update local state
  } catch (error) {
    console.error("Failed to add item:", error);
  }
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
