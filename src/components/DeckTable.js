import React from "react";
import CardItem from "./CardItem";
import DeckTableCardItem from "./DeckTableCardItem";
import "./DeckTable.css";

const DeckTable = ({ deck, onCardLeave, onCardClick }) => {
  const groupedCards = deck.reduce((acc, card) => {
    let category = card.supertype ? card.supertype.toLowerCase() : "unknown";
    let subCategory = null;

    if (category === "trainer") {
      if (card.subtypes && card.subtypes.includes("Stadium")) {
        subCategory = "Stadium";
      } else if (card.subtypes && card.subtypes.includes("Item")) {
        subCategory = "Item";
      } else if (card.subtypes && card.subtypes.includes("Pokémon Tool")) {
        subCategory = "Pokémon Tool";
      } else {
        subCategory = "Supporter"; // Default subtype for trainers
      }
    }

    const groupKey = category + (subCategory ? `-${subCategory}` : "");

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    // Check if card already exists in the group
    const existingCardIndex = acc[groupKey].findIndex(
      (c) => c.card.id === card.id
    );

    if (existingCardIndex >= 0) {
      // Increment quantity if card already exists
      acc[groupKey][existingCardIndex].quantity += 1;
    } else {
      // Add new card with quantity 1
      acc[groupKey].push({ card, quantity: 1 });
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
          {Object.entries(groupedCards).map(([groupKey, cards]) => {
            const [category, subCategory] = groupKey.split("-");
            let sectionTitle =
              category.charAt(0).toUpperCase() + category.slice(1);
            if (subCategory) {
              sectionTitle += ` (${
                subCategory.charAt(0).toUpperCase() + subCategory.slice(1)
              })`;
            }

            return (
              <div key={groupKey} className="deck-section">
                <div className="section-header">
                  <h3>
                    {sectionTitle} (
                    {cards.reduce((sum, { quantity }) => sum + quantity, 0)})
                  </h3>
                </div>
                <div className="section-cards">
                  {cards.map(({ card, quantity }) => (
                    <DeckTableCardItem
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DeckTable;
