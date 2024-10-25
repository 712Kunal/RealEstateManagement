import { React, useState } from "react";

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
              className={`py-4 px-9 border border-slate-200 cursor-pointer first:rounded-tl-lg first:rounded-tr-none last:rounded-tl-none last:rounded-tr-lg ${
                querry.type === type ? "bg-slate-100" : ""
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
