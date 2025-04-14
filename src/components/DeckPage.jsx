import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import DeckTable from "./DeckTable";
import SearchResults from "./SearchResults";
import CardPage from "./CardPage";
import "./deckPage.css";
import axios from "axios";
// import cardData from "./data/cards"; // Removing cardData import

let hoverTimer;

function DeckPage() {
  const [deck, setDeck] = useState([]);
  const [deckName, setDeckName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const ptcgApiBaseUrl = "https://api.pokemontcg.io/v2";
  useEffect(() => {
    console.log("deck update", deck);
  }, [deck]);

  const searchCards = async (query) => {
    try {
      const response = await axios.get(`${ptcgApiBaseUrl}/cards`, {
        params: { q: `name:${query}*` },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching cards from PTCG API", error);
      return [];
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const apiSearchResults = await searchCards(query);
      setSearchResults(apiSearchResults);
      setHoveredCard(null);
      setSelectedCard(null);
      setIsHovered(false);
    } catch (error) {
      console.error("Search failed", error);
      setSearchResults([]);
    }
  };

  const handleCreateDeck = async (deckName) => {
    try {
      const response = await axios.post("/api/createDeck", {
        name: deckName || "New DDDeck",
      });
      const newDeck = response.data;
      setDeck([]);
      setDeckName(newDeck.name);
      localStorage.setItem("deckId", newDeck.id);
      alert("Deck created successfully!");
    } catch (error) {
      console.error("Failed to create deck", error);
    }
  };

  const handleAddToDeck = async (card, quantity) => {
    try {
      const deckId = localStorage.getItem("deckId");
      const response = await axios.post(`/api/decks/${deckId}/addCard`, {
        deckId,
        cardId: card.id,
        quantity: quantity,
      });

      if (response.status === 200) {
        console.log("Deck updated:", response.data);
        setDeck(response.data.cards);
      } else {
        console.error("Failed to add card to deck");
      }
    } catch (error) {
      console.error("Error adding card to deck:", error);
    }

    clearSelectedCard();
  };

  const handleCardHover = (card, event) => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      const rect = event.target.getBoundingClientRect();
      setHoveredCard(card);
      setIsHovered(true);
      setHoverPosition({
        top: rect.top + window.scrollY - window.innerHeight * 0.2, // Keep the top position relative to the card item
        left: rect.right + window.scrollX, // Position to the right of the card item
      });
    }, 150);
  };

  const handleCardClick = (card) => {
    console.log("card", card);
    setSelectedCard(card);
  };

  const clearSelectedCard = () => {
    setSelectedCard(null);
  };
  return (
    <div className="deckPage-container">
      <header className="deckPage-header">
        <h1>PTCG Deck Builder</h1>
      </header>
      <main className="deckPage-main">
        <SearchBar onSearch={handleSearch} />
        <div className="deckPage-columns">
          <div className="column column-deck-table">
            <DeckTable
              deck={deck}
              onCardClick={handleCardClick}
              clearSelectedCard={clearSelectedCard}
              onCreateDeck={handleCreateDeck}
            />
          </div>
          {selectedCard ? (
            <div>
              <CardPage card={selectedCard} onClose={clearSelectedCard} />
            </div>
          ) : null}

          {searchResults.length > 0 ? (
            <div className="column column-search-results">
              <SearchResults
                results={searchResults}
                onAddToDeck={handleAddToDeck}
                onCardClick={handleCardClick}
                clearSelectedCard={clearSelectedCard}
              />
            </div>
          ) : null}
        </div>
      </main>
      <footer className="deckPage-footer">
        <p>&copy; 2025 PTCG Deck Builder</p>
      </footer>
    </div>
  );
}

export default DeckPage;
