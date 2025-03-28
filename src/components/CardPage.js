import React, { useEffect, useRef } from "react";
import "./CardPage.css";

const CardPage = ({ card, onAddToDeck, onClose, isHovered }) => {
  const cardPageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isHovered &&
        cardPageRef.current &&
        !cardPageRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-page" ref={cardPageRef}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>{card.name}</h2>
      <div className="card-content">
        {card.images && card.images.large && (
          <img src={card.images.large} alt={card.name} className="card-image" />
        )}
        <div className="card-details">
          <p>
            <strong>Supertype:</strong> {card.supertype}
          </p>
          <p>
            <strong>Subtypes:</strong>{" "}
            {card.subtypes && card.subtypes.join(", ")}
          </p>
          <p>
            <strong>HP:</strong> {card.hp}
          </p>
          {card.types && (
            <p>
              <strong>Types:</strong> {card.types.join(", ")}
            </p>
          )}
          {card.attacks && card.attacks.length > 0 && (
            <div>
              <h3>Attacks:</h3>
              <ul>
                {card.attacks.map((attack, index) => (
                  <li key={index}>
                    <strong>{attack.name}:</strong> {attack.text} Cost:{" "}
                    {attack.cost && attack.cost.join(", ")}, Damage:{" "}
                    {attack.damage}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPage;
