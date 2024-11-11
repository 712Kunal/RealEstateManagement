import React from "react";
import { FcSearch } from "react-icons/fc";

function Filter() {
  return (
    <div className="filter flex flex-col gap-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-indigo-400">
        Search results for{" "}
        <a href="#" className="hover:text-indigo-500 transition-colors">
          London
        </a>
      </h1>
      <div className="top w-full flex flex-wrap gap-6">
        <div className="item w-full flex flex-col gap-2">
          <label htmlFor="city" className="text-xl text-white/85">
            Location
          </label>
          <input
            className="w-full text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="text"
            name="location"
            placeholder="City Location"
          />
        </div>
      </div>

      <div className="bottom flex flex-wrap gap-6">
        <div className="item flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor="type" className="text-xl text-white/85">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-full sm:w-28 text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
          >
            <option value="" className="bg-black">
              Any
            </option>
            <option value="Buy" className="bg-black">
              Buy
            </option>
            <option value="Rent" className="bg-black">
              Rent
            </option>
          </select>
        </div>
        <div className="item flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor="type" className="text-xl text-white/85">
            Property
          </label>
          <select
            name="type"
            id="type"
            className="w-full sm:w-28 text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
          >
            <option value="" className="bg-black">
              Any
            </option>
            <option value="Buy" className="bg-black">
              Appartment
            </option>
            <option value="Rent" className="bg-black">
              House
            </option>
            <option value="Rent" className="bg-black">
              Flat
            </option>
            <option value="Rent" className="bg-black">
              Condo
            </option>
            <option value="Rent" className="bg-black">
              Land
            </option>
          </select>
        </div>
        <div className="item flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor="city" className="text-xl text-white/85">
            Min Price
          </label>
          <input
            className="w-full sm:w-28 text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="number"
            name="minPrice"
            placeholder="Any"
          />
        </div>
        <div className="item flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor="city" className="text-xl text-white/85">
            Max Price
          </label>
          <input
            className="w-full sm:w-28 text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="number"
            name="maxPrice"
            placeholder="Any"
          />
        </div>
        <div className="item flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor="city" className="text-xl text-white/85">
            Bedroom
          </label>
          <input
            className="w-full sm:w-28 text-gray-100 rounded-lg p-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-wider text-xl font-medium"
            type="text"
            name="bedroom"
            placeholder="Any"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-12 p-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 place-self-end"
        >
          <FcSearch className="text-3xl bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
