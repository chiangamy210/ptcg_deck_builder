import React, { useState } from "react";
import DeckCreator from "./DeckCreator";
import "../styles/DeckTable.css";

const Decks = ({ deck, onCardLeave, onCardClick, onCreateDeck }) => {
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
          onClick={() => setIsCreatorVisible(true)}
        >
          +
        </button>
        {/* <div className="deck-stats">Total Cards: {deck.length}</div> */}
      </div>

      {isCreatorVisible && (
        <DeckCreator
          onSubmit={(deckName) => {
            handleSubmit(deckName);
          }}
          onCreateDeck={(deckName) => {
            onCreateDeck(deckName);
          }}
        />
      )}
    </div>
  );
};

export default Decks;
