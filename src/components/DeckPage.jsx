import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import DeckTable from "./DeckTable";
import SearchResults from "./SearchResults";
import CardPage from "./CardPage";
import "../styles/DeckPage.css";
import axios from "axios";

let hoverTimer;

function DeckPage() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const ptcgApiBaseUrl = "https://api.pokemontcg.io/v2";

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const response = await axios.get(`/api/decks/${deckId}`);
        if (response.status === 200) {
          setDeck(response.data);
        } else if (response.status === 404) {
          setMessage("Deck not found");
        } else {
          setMessage("Failed to fetch deck");
        }
      } catch (error) {
        console.error("Failed to fetch deck", error);
        setMessage("Failed to fetch deck");
      }
    };

    fetchDeck();
  }, [deckId]);

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

  const handleAddToDeck = async (card, quantity) => {
    try {
      const deckId = localStorage.getItem("deckId");
      const response = await axios.post(`/api/decks/${deckId}/addCard`, {
        deckId,
        cardId: card.id,
        quantity: quantity,
      });

      if (response.status === 200) {
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
      <main className="deckPage-main">
        <SearchBar onSearch={handleSearch} />
        <div className="deckPage-columns">
          <div className="column ">
            <DeckTable
              deck={deck}
              onCardClick={handleCardClick}
              clearSelectedCard={clearSelectedCard}
              // onCreateDeck={handleCreateDeck}
            />
            {message && <p>{message}</p>}
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
    </div>
  );
}

export default DeckPage;
