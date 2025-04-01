import React from "react";
import "./CardItem.css";

const CardItem = ({ card, onCardClick, onCardHover, onCardLeave }) => {
  return (
    <div
      className="card-item"
      onClick={() => onCardClick(card)}
      onMouseEnter={(e) => {
        console.log(card);
        if (onCardHover) {
          onCardHover(card, e);
        }
      }}
      onMouseLeave={onCardLeave}
    >
      <div className="card-item-header">
        <div className="card-name">{card.name}</div>
        {card.set.ptcgoCode && (
          <div className="card-set">({card.set.ptcgoCode})</div>
        )}
      </div>
      <img className="card-image" src={card.images.small} alt={card.name} />
      <div className="card-item-footer">
        <div className="card-price">
          $
          {card.cardmarket &&
            card.cardmarket.prices.averageSellPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
