import React from "react";
import "./CardItem.css";

const CardItem = ({ card, onCardClick, onAddToDeck }) => {
  return (
    <div className="card-item" onClick={() => onCardClick(card)}>
      <div className="card-item-header">
        <div className="card-name">{card.name}</div>
        {card.set && card.set.ptcgoCode && (
          <div className="card-set">({card.set.ptcgoCode})</div>
        )}
      </div>
      <img className="card-image" src={card.images?.small} alt={card.name} />
      <div className="card-item-footer">
        <div className="card-price">
          $
          {card.cardmarket &&
            card.cardmarket.prices.averageSellPrice.toFixed(2)}
        </div>
        <button
          className="add-to-deck-button"
          onClick={() => onAddToDeck(card)}
        >
          Add to Deck
        </button>
      </div>
    </div>
  );
};

export default CardItem;
