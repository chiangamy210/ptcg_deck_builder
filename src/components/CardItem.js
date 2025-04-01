import React, { useState } from "react";
import "./CardItem.css";

const CardItem = ({ card, onCardClick, onAddToDeck }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onAddToDeck(card, newQuantity); // Now correctly using the updated quantity
      return newQuantity;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        onAddToDeck(card, newQuantity); // Now correctly using the updated quantity
        return newQuantity;
      } else {
        setShowQuantity(false);
        return 1; // Reset to 1
      }
    });
  };

  const handleQuantityAndOnCardClicked = (e) => {
    e.stopPropagation();
    if (showQuantity) {
      setQuantity(1);
      onAddToDeck(card, 1); // Ensure we send 1
    } else {
      setShowQuantity(true);
    }
  };

  return (
    <div className="card-item" onClick={() => onCardClick(card)}>
      <div className="card-item-header">
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
            onClick={handleQuantityAndOnCardClicked}
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
