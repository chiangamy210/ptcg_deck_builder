import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import DeckTable from "./components/DeckTable";
import SearchResults from "./components/SearchResults";
import CardPage from "./components/CardPage";
import "./App.css";
import axios from "axios";
// import cardData from "./data/cards"; // Removing cardData import

let hoverTimer;

function App() {
  const [deck, setDeck] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const ptcgApiBaseUrl = "https://api.pokemontcg.io/v2";

  // Function to fetch search results from PTCG API
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

  const handleAddToDeck = (card) => {
    setDeck([...deck, card]);
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
    setSelectedCard(card);
  };

  const clearSelectedCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>PTCG Deck Builder</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <div className="app-columns">
          <div className="column column-deck-table">
            <DeckTable
              deck={deck}
              onCardClick={handleCardClick}
              clearSelectedCard={clearSelectedCard}
            />
          </div>
          {hoveredCard ? (
            <div
              className="card-page-hover"
              style={{
                top: hoverPosition.top,
                left: hoverPosition.left,
              }}
            >
              <CardPage
                card={hoveredCard}
                isHovered={isHovered}
                onClose={() => setHoveredCard(null)}
              />
            </div>
          ) : null}

          {selectedCard ? (
            <div className="column column-card-page">
              <CardPage
                card={selectedCard}
                onAddToDeck={handleAddToDeck}
                onClose={clearSelectedCard}
              />
            </div>
          ) : null}

          {searchResults.length > 0 ? (
            <div className="column column-search-results">
              <SearchResults
                results={searchResults}
                onAddToDeck={handleAddToDeck}
                onCardClick={handleCardClick}
                clearSelectedCard={clearSelectedCard}
                onCardHover={handleCardHover}
              />
            </div>
          ) : null}
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 PTCG Deck Builder</p>
      </footer>
    </div>
  );
}

export default App;
