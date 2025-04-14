import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=name:${encodedSearchTerm}`
      );
      onSearch(searchTerm); // Pass searchTerm to onSearch
    } catch (error) {
      console.error("Error fetching cards:", error);
      alert("Failed to fetch cards. Please check the console for details.");
      onSearch(""); // Send empty string in case of error
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Find and add cards to deck..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>
      <div className="search-options">
        <span className="search-option">Advanced</span>
        <span className="search-option-separator">·</span>
        <span className="search-option">Tips</span>
      </div>
    </div>
  );
};

export default SearchBar;
