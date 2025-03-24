import React from "react";
import "./CardItem.css";

const CardItem = ({ card, quantity = 1, onAddToDeck }) => {
  return (
    <div className="card-item">
      <div className="card-quantity">{quantity}</div>
      <div className="card-name">{card.name}</div>
      <div className="card-actions">
        <button
          className="card-info-button"
          title="Card Info"
          onClick={() => window.alert(`Card Info: ${card.name}`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </button>
        {onAddToDeck && (
          <button
            className="card-add-button"
            title="Add to Deck"
            onClick={() => onAddToDeck(card)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        )}
        {!onAddToDeck && (
          <button
            className="card-remove-button"
            title="Remove from Deck"
            onClick={() => window.alert(`Remove ${card.name} from deck`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardItem;
