import React, { useRef } from "react";
import "./CardPage.css";

const CardPage = ({ card, onClose, isHovered }) => {
  const cardPageRef = useRef(null);

  return (
    <div className="card-page" ref={cardPageRef}>
      {!isHovered ? (
        <button className="close-button" onClick={onClose}>
          X
        </button>
      ) : null}

      <h2>
        <span>{card.name}</span>
        {card.set.ptcgoCode && <span>({card.set.ptcgoCode})</span>}
      </h2>
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
          {card.hp && (
            <p>
              <strong>HP:</strong> {card.hp}
            </p>
          )}
          {card.rules && (
            <p>
              <strong>Rules:</strong> {card.rules}
            </p>
          )}
          {card.abilities && card.abilities.length > 0 && (
            <div>
              <strong>Abilities:</strong>
              <ul>
                {card.abilities.map((ability, index) => (
                  <li key={index}>
                    {ability.name} - {ability.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {card.cardmarket &&
            card.cardmarket.prices &&
            card.cardmarket.prices.averageSellPrice && (
              <p>
                <strong>Price:</strong> $
                {card.cardmarket.prices.averageSellPrice}
              </p>
            )}
          {card.types && (
            <p>
              <strong>Types:</strong> {card.types.join(", ")}
            </p>
          )}
          {card.retreatCost && (
            <p>
              <strong>Retreat Cost:</strong> {card.retreatCost.join(", ")}
            </p>
          )}
          {card.weaknesses && card.weaknesses.length > 0 && (
            <p>
              <strong>Weaknesses:</strong>{" "}
              {card.weaknesses
                .map((weakness) => `${weakness.type} ${weakness.value}`)
                .join(", ")}
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
