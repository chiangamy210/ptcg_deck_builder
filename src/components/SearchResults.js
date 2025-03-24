import React from "react";
import CardItem from "./CardItem";
import "./SearchResults.css";

const SearchResults = ({ results, onAddToDeck }) => {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h3>Search Results ({results.length})</h3>
      </div>
      <div className="results-list">
        {results.map((card) => (
          <CardItem key={card.id} card={card} onAddToDeck={onAddToDeck} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
