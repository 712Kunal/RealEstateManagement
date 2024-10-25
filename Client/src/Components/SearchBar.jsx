import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="type"></div>
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
