import React from "react";
import CardItem from "./CardItem";
import "./DeckTable.css";

const DeckTable = ({ deck, onCardLeave, onCardClick }) => {
  // Group cards by supertype
  const groupedCards = deck.reduce((acc, card) => {
    if (!acc[card.supertype]) {
      acc[card.supertype] = [];
    }

    // Check if card already exists in the group
    const existingCardIndex = acc[card.supertype].findIndex(
      (c) => c.card.id === card.id
    );

    if (existingCardIndex >= 0) {
      // Increment quantity if card already exists
      acc[card.supertype][existingCardIndex].quantity += 1;
    } else {
      // Add new card with quantity 1
      acc[card.supertype].push({ card, quantity: 1 });
    }

    return acc;
  }, {});

  return (
    <div className="deck-table">
      <div className="deck-header">
        <h2>My Deck</h2>
        <div className="deck-stats">Total Cards: {deck.length}</div>
      </div>

      {Object.keys(groupedCards).length === 0 ? (
        <div className="empty-deck-message">
          Your deck is empty. Use the search bar to find and add cards.
        </div>
      ) : (
        <div className="deck-sections">
          {Object.entries(groupedCards).map(([category, cards]) => (
            <div key={category} className="deck-section">
              <div className="section-header">
                <h3>
                  {category} (
                  {cards.reduce((sum, { quantity }) => sum + quantity, 0)})
                </h3>
              </div>
              <div className="section-cards">
                {cards.map(({ card, quantity }) => (
                  <CardItem
                    key={card.id}
                    card={card}
                    quantity={quantity}
                    // onCardHover={onCardHover}
                    onCardLeave={onCardLeave}
                    onCardClick={onCardClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeckTable;
