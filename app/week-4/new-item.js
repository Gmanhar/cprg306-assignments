"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex items-center space-x-2 px-6 py-6 shadow bg-white text-black">
      <span className="text-lg font-medium w-6 text-center">{quantity}</span>

      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`w-8 h-8 rounded text-white text-lg flex items-center justify-center shadow ${
          quantity === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        –
      </button>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`w-8 h-8 rounded text-white text-lg flex items-center justify-center shadow ${
          quantity === 20
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        +
      </button>
    </div>
  );
}
