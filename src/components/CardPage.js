import React, { useEffect, useRef } from "react";
import "./CardPage.css";

const CardPage = ({ card, onAddToDeck, onClose }) => {
  const cardPageRef = useRef(null);

  useEffect(() => {
    // Re-enabling the useEffect hook with delay
    const handleClickOutside = (event) => {
      if (cardPageRef.current && !cardPageRef.current.contains(event.target)) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      // Delay adding listener
      document.addEventListener("mousedown", handleClickOutside);
    }, 100); // 100ms delay

    return () => {
      clearTimeout(timer); // Clear timeout on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-page" ref={cardPageRef}>
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
