import React, { useState } from "react";
import "./DeckCreator.css";

const DeckCreator = ({ onCreateDeck }) => {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (deckName.trim()) {
      onCreateDeck(deckName);
      console.log(deckName);
      setDeckName("");
    }
  };

  return (
    <div className="deck-creator">
      <h3>Create New Deck</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter deck name"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default DeckCreator;
