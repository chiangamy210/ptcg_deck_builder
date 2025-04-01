import React, { useState } from "react";

function DeckTableCardItem({ card, onCardClick }) {
  return (
    <div
      onClick={onCardClick}
      style={{
        border: "1px solid black",
        padding: "5px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      <div className="card-item-header">
        <span className="card-name">{card.name}</span>
        {card.set && card.set.ptcgoCode && (
          <span className="card-set">({card.set.ptcgoCode})</span>
        )}
      </div>
    </div>
  );
}

export default DeckTableCardItem;
