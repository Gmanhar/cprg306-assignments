"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="p-2 m-2 text-l capitalize text-stone-50">
        Sort By:
        <button
          className={`p-1 m-2 w-28 square-lg ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`p-1 m-2 w-28 square-lg ${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul className="text-xl capitalize text-stone-50">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
