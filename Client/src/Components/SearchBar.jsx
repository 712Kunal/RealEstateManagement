import { React, useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const [isMobile, setIsMobile] = useState(mobileWidth);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(mobileWidth);
  }, [mobileWidth]);

  const types = ["Buy", "Rent"];
  const [querry, setQuerry] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  // FUNCTION FOR SWITCHING THE TYPES (BUY OR RENT)
  const switchType = (val) => {
    setQuerry((prev) => ({ ...prev, type: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get("location");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");

    setQuerry((prev) => ({ ...prev, location, minPrice, maxPrice }));
    console.log(querry);
    
    // NAVIGATE TO THE LIST PAGE
    navigate(
      `/app/list?type=${querry.type}&location=${querry.location}&minPrice=${querry.minPrice}&maxPrice=${querry.maxPrice}`
    );
  };

  return (
    <div className="flex flex-col items-start">
      <div className="type mx-2 md:mx-0 lg:mx-0">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`py-4 px-9 cursor-pointer first:rounded-tl-lg first:rounded-tr-none last:rounded-tl-none last:rounded-tr-lg ${
              querry.type === type
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-indigo-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-screen p-2 md:flex-row md:w-auto md:justify-between h-16 lg:gap-2 lg:p-0"
      >
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-2 border-indigo-100 focus:border-indigo-300 focus:outline-none placeholder:text-gray-400"
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-2 border-indigo-100 focus:border-indigo-300 focus:outline-none placeholder:text-gray-400"
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          className="w-full rounded-lg py-2 md:w-52 px-5 md:py-0 border-2 border-indigo-100 focus:border-indigo-300 focus:outline-none placeholder:text-gray-400"
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />

        <button
          type="submit"
          className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center transition-colors duration-300"
        >
          {isMobile ? (
            <span className="text-xl text-white tracking-widest font-sidebar">
              Search Properties
            </span>
          ) : (
            <FcSearch className="text-4xl bg-white rounded-full p-1" />
          )}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
