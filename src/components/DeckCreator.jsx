import React, { useState } from "react";
import "../styles/DeckCreator.css";

const DeckCreator = ({ onSubmit }) => {
  const [deckName, setDeckName] = useState("");

  return (
    <div className="deck-creator">
      <h3>Create New Deck</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(deckName);
        }}
      >
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
