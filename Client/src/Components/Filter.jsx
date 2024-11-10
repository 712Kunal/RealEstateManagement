import React from "react";

function Filter() {
  return (
    <div className="filter flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Search results for <a href="">London</a>
      </h1>
      <div className="top">
        <div className="item flex flex-col gap-2">
          <label htmlFor="city" className="text-xl text-white/85">
            Location
          </label>
          <input
            className="w-full text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="text"
            name="location"
            placeholder="City Location"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type" className="text-white/85">
            Type
          </label>
          <select name="type" id="type" className="w-28 text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium">
            <option value="">Any</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="city" className="text-white/85">
            Property
          </label>
          <select name="type" id="type" className="w-28 text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium">
            <option value="">Any</option>
            <option value="Buy">Appartment</option>
            <option value="Rent">House</option>
            <option value="Rent">Flat</option>
            <option value="Rent">Condo</option>
            <option value="Rent">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="city" className="text-white/85">
            Min Price
          </label>
          <input
            className="w-28 text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="number"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="city" className="text-white/85">
            Max Price
          </label>
          <input
            className="w-28 text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="number"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="city" className="text-white/85">
            Bedroom
          </label>
          <input
            className="w-28 text-gray-100 rounded-lg p-2 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="text"
            name="bedroom"
            placeholder="any"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
