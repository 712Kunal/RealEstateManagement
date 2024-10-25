import { React, useState } from "react";
import { FcSearch } from "react-icons/fc";

function SearchBar() {
  const types = ["Buy", "Rent"];

  const [querry, setQuerry] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  //CHANGING THE TYPE OF THE BUTTONS
  const switchType = (val) => {
    setQuerry((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="flex flex-col items-start">
      <div className="type">
        {types.map((type) => {
          return (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={`py-4 px-9 border border-b-0 border-slate-200 cursor-pointer first:rounded-tl-lg first:rounded-tr-none last:rounded-tl-none last:rounded-tr-lg ${
                querry.type === type ? "bg-slate-100" : ""
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form className="border flex justify-between h-16 gap-1">
        <input
          className="w-52 px-5 py-0 border-none"
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          className="w-52 px-5 py-0 border-none"
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          className="w-52 px-5 py-0 border-none"
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button className="p-2 bg-yellow-300">
          <FcSearch className="text-4xl" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
