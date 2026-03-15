// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, initialValue = "", isLoading }) => {
  const [input, setInput] = useState(initialValue);
  const [inputError, setInputError] = useState("");

  const validateInput = (value) => {
    // Allow letters, spaces, hyphens, and dots (for cities like "New York", "St. Louis")
    const cityRegex = /^[a-zA-Z\s\-\.]+$/;
    
    if (!value.trim()) {
      return "Please enter a city name";
    }
    if (!cityRegex.test(value)) {
      return "City name can only contain letters, spaces, hyphens, and dots";
    }
    if (value.length > 50) {
      return "City name is too long (max 50 characters)";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInput(input);
    
    if (error) {
      setInputError(error);
      return;
    }
    
    setInputError("");
    onSearch(input.trim());
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (inputError) setInputError("");
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            value={input}
            onChange={handleChange}
            placeholder="e.g., India, London, USA, Brazil, Egypt"
            className={`w-full p-4 pl-5 rounded-xl bg-white/10 border ${
              inputError ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all`}
            disabled={isLoading}
          />
          {inputError && (
            <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
              {inputError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-[#0a0600] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(212,160,23,0.3)] ${
            isLoading 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:scale-105 hover:shadow-[0_8px_30px_rgba(212,160,23,0.5)]'
          }`}
        >
          {isLoading ? 'Searching...' : 'Search Weather'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;