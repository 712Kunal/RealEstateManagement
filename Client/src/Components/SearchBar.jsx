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
      <div className="type mx-2 md:mx-0 lg:mx-0">
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
      <form className="flex flex-col gap-1 w-screen p-2 md:flex-row md:w-auto md:justify-between h-16 lg:gap-2 lg:p-0">
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-none"
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-none"
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-none"
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button className="p-2 rounded-lg bg-yellow-300">
          <FcSearch className="text-4xl" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
