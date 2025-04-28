import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeckCreator from "./DeckCreator";
import "../styles/DeckTable.css";

const DecksIndex = ({ decks, onCreateDeck }) => {
  const [isCreatorVisible, setIsCreatorVisible] = useState(false);

  const handleSubmit = (deckName) => {
    if (deckName) {
      onCreateDeck(deckName);
      setIsCreatorVisible(false);
    }
  };

  return (
    <div className="deck-table">
      <div className="deck-header">
        <h2>My Decks</h2>
        <button
          className="new-deck-button"
          onClick={() => setIsCreatorVisible(true)}>
          +
        </button>
      </div>

      {isCreatorVisible && (
        <DeckCreator
          onSubmit={(deckName) => {
            handleSubmit(deckName);
          }}
        />
      )}

      {decks.length > 0
        ? decks.map((deck) => (
            <Link to={`/decks/${deck.id}`} key={deck.id}>
              <div className="deck-item">{deck.name}</div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default DecksIndex;
