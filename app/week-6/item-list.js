"use client"; // Indicates that this file should be processed on the client-side

import { useState } from 'react'; // Importing the useState hook from React
import Item from './item'; // Importing the Item component

export default function ItemList({ items }) {
  // State variable to track the sorting criteria (either 'name' or 'category')
  const [sortBy, setSortBy] = useState('name');

  // Sorting the items array based on the sortBy state variable
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name); // Sorting by name
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category); // Sort by category
    }
  });

  return (
    <div>
      <div className="p-2 m-2 text-l capitalize text-stone-50">
        Sort By:
        <button
          className={`p-1 m-2 w-28 square-lg ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`p-1 m-2 w-28 square-lg ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>

      <ul className="text-xl capitalize text-stone-50">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
