import { useState } from "react";

const ShopFilters = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "T-Shirts",
    "Shorts",
    "Shirts",
    "Jeans",
    "Hoodies",
    "Accessories"
  ];

  const colors = [
    "#22c55e",
    "#ef4444",
    "#eab308",
    "#f97316",
    "#06b6d4",
    "#3b82f6",
    "#6366f1",
    "#a855f7",
    "#ec4899",
    "#111111"
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large"
  ];

  const handleCategory = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <aside className="hidden w-220px shrink-0 lg:block">

      <div className="rounded-xl border border-gray-200 p-5">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black">
            Filters
          </h2>

          <span className="text-gray-400">
            ☰
          </span>
        </div>

        <div className="my-5 h-px bg-gray-200" />

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-sm font-bold">
            Categories
          </h3>

          <div className="space-y-3">

            <button
              type="button"
              onClick={() => handleCategory("All")}
              className={`block text-sm ${
                selectedCategory === "All"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategory(category)}
                className={`block text-left text-sm ${
                  selectedCategory === category
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>

        <div className="my-6 h-px bg-gray-200" />

        {/* Price */}
        <div>
          <h3 className="mb-4 text-sm font-bold">
            Price
          </h3>

          <input
            type="range"
            min="50"
            max="500"
            defaultValue="300"
            className="w-full accent-black"
          />

          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>$50</span>
            <span>$500</span>
          </div>
        </div>

        <div className="my-6 h-px bg-gray-200" />

        {/* Colors */}
        <div>
          <h3 className="mb-4 text-sm font-bold">
            Colors
          </h3>

          <div className="grid grid-cols-5 gap-3">

            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className="h-7 w-7 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
                aria-label="Select color"
              />
            ))}

          </div>
        </div>

        <div className="my-6 h-px bg-gray-200" />

        {/* Sizes */}
        <div>
          <h3 className="mb-4 text-sm font-bold">
            Size
          </h3>

          <div className="flex flex-wrap gap-2">

            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className="rounded-full bg-gray-100 px-3 py-2 text-[10px] text-gray-600 hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}

          </div>
        </div>

        <button
          type="button"
          className="mt-7 w-full rounded-full bg-black py-3 text-xs font-bold text-white"
        >
          Apply Filter
        </button>

      </div>

    </aside>
  );
};

export default ShopFilters;