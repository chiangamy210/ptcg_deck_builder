import React, { useState } from "react";
import "./CardItem.css";

const CardItem = ({ card, onCardClick, onAddToDeck }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setShowQuantity(false);
    }
  };

  const handleAddToDeckClick = (e) => {
    e.stopPropagation();
    if (showQuantity && quantity > 0) {
      onAddToDeck(card, quantity);
      setShowQuantity(false); // Hide quantity after adding to deck
      setQuantity(1); // Reset quantity for next use
    } else {
      setShowQuantity(true);
    }
  };

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
          ${card.cardmarket?.prices?.averageSellPrice?.toFixed(2) || "N/A"}
        </div>
        <div
          className={`add-to-deck-button ${
            showQuantity ? "show-quantity" : ""
          }`}
        >
          <button
            onClick={handleAddToDeckClick}
            className="add-icon-button"
            title="Add to deck"
          >
            +
          </button>
          {showQuantity && (
            <div className="quantity-input-container">
              <button
                className="quantity-button"
                onClick={(e) => {
                  e.stopPropagation();
                  decrementQuantity();
                }}
              >
                -
              </button>
              <input
                type="text"
                className="quantity-input"
                value={quantity}
                readOnly
              />
              <button
                className="quantity-button"
                onClick={(e) => {
                  e.stopPropagation();
                  incrementQuantity();
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
