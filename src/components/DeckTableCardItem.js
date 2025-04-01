import React, { useState } from "react";
import "./DeckTableCardItem.css";

function DeckTableCardItem({ card, onCardClick, quantity }) {
  return (
    <div
      onClick={() => {
        onCardClick(card);
      }}
      className="deck-table-card-item"
    >
      <div className="card-item-header">
        {quantity > 0 && <span className="card-quantity">{quantity}</span>}
        <span className="card-name">{card.name}</span>
        {card.set && card.set.ptcgoCode && (
          <span className="card-set">({card.set.ptcgoCode})</span>
        )}
      </div>
    </div>
  );
}

export default DeckTableCardItem;
