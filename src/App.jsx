import DecksIndex from "./components/DecksIndex";
import DeckPage from "./components/DeckPage";
import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState([]);

  const handleCreateDeck = async (deckName) => {
    try {
      const response = await axios.post("/api/createDeck", {
        name: deckName || "New Deck",
        withCredentials: false,
      });
      const newDeck = response.data;
      setDecks([...decks, newDeck]);
      setDeckName(newDeck.name);
      localStorage.setItem("deckId", newDeck.id);
      alert("Deck created successfully!");
      console.log(decks);
    } catch (error) {
      console.error("Failed to create deck", error);
    }
  };

  return (
    <div>
      <header className="app-header">
        <h1>PTCG Deck Builder</h1>
      </header>
      <div className="column column-deck-table">
        {" "}
        <DecksIndex decks={decks} onCreateDeck={handleCreateDeck} />
      </div>

      <div>
        ...............................................................................
      </div>
      <DeckPage />
      <footer className="app-footer">
        <p>&copy; 2025 PTCG Deck Builder</p>
      </footer>
    </div>
  );
}
