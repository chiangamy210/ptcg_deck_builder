import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import DeckTable from "./components/DeckTable";
import SearchResults from "./components/SearchResults";
import cardsData from "./data/cards";
import "./App.css";

function App() {
  const [deck, setDeck] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = cardsData.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAddToDeck = (card) => {
    setDeck([...deck, card]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>PTCG Deck Builder</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <div className="content-area">
          <SearchResults
            results={searchResults}
            onAddToDeck={handleAddToDeck}
          />
          <DeckTable deck={deck} />
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 PTCG Deck Builder</p>
      </footer>
    </div>
  );
}

export default App;
