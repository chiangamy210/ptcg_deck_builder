import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "./SearchResults.css";

const SearchResults = ({
  onAddToDeck,
  results,
  onCardHover,
  onCardLeave,
  onCardClick,
  clearSelectedCard,
}) => {
  // Clears selected card when a new search occurs
  // useEffect(() => { // REMOVING this useEffect
  //   clearSelectedCard();
  // }, [results, clearSelectedCard]);

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
          <CardItem
            key={card.id}
            card={card}
            onAddToDeck={onAddToDeck}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            onCardClick={onCardClick}
            clearSelectedCard={clearSelectedCard} // Pass clearSelectedCard
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
