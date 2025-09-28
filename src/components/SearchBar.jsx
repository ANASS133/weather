import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Enter city..."
        autoComplete="off"
        className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white border border-white/30 focus:outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition"
      >
        Get Weather
      </button>
    </form>
  );
};

export default SearchBar;
