"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => (prev < 99 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main className="">
      <form
        className="p-4 m-4 text-black bg-slate-900 max-w-sm w-full  rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            className="p-2 rounded-md w-full"
            type="text"
            id="name"
            value={name}
            required
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-semibold mr-2">Quantity:</span>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded">
            <button
              onClick={decrement}
              type="button"
              disabled={quantity === 1}
              className={`w-8 h-8 rounded text-white text-lg flex items-center justify-center shadow ${
                quantity === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              –
            </button>

            <span className="text-lg font-medium w-6 text-center">
              {quantity}
            </span>

            <button
              onClick={increment}
              type="button"
              disabled={quantity === 99}
              className={`w-8 h-8 rounded text-white text-lg flex items-center justify-center shadow ${
                quantity === 99
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <select
            className="p-2 rounded-md w-full"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          className="bg-orange-500 w-full p-2 rounded-lg text-black font-semibold"
          type="submit"
        >
          Add
        </button>
      </form>
    </main>
  );
}
