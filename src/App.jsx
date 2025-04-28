// import DecksIndex from "./components/DecksIndex";
// import DeckPage from "./components/DeckPage";
// import "./styles/App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   const [deckName, setDeckName] = useState("");
//   const [decks, setDecks] = useState([]);

//   useEffect(() => {
//     const fetchDecks = async () => {
//       try {
//         const response = await axios.get("/api/decks");
//         setDecks(response.data);
//       } catch (error) {
//         console.error("Failed to fetch decks", error);
//       }
//     };

//     fetchDecks();
//   }, []);

//   const handleCreateDeck = async (deckName) => {
//     try {
//       const response = await axios.post("/api/createDeck", {
//         name: deckName || "New Deck",
//         withCredentials: false,
//       });
//       const newDeck = response.data;
//       setDecks([...decks, newDeck]);
//       setDeckName(newDeck.name);
//       localStorage.setItem("deckId", newDeck.id);
//       alert("Deck created successfully!");
//       console.log(decks);
//     } catch (error) {
//       console.error("Failed to create deck", error);
//     }
//   };

//   return (
//     <div>
//       <header className="app-header">
//         <h1>PTCG Deck Builder</h1>
//       </header>
//       <div className="column column-deck-table">
//         <DecksIndex decks={decks} onCreateDeck={handleCreateDeck} />
//       </div>

//       <footer className="app-footer">
//         <p>&copy; 2025 PTCG Deck Builder</p>
//       </footer>
//     </div>
//   );
// }

import DecksIndex from "./components/DecksIndex";
import DeckPage from "./components/DeckPage";
import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get("/api/decks");
        setDecks(response.data);
      } catch (error) {
        console.error("Failed to fetch decks", error);
      }
    };

    fetchDecks();
  }, []);

  const handleCreateDeck = async (deckName) => {
    try {
      const response = await axios.post("/api/createDeck", {
        name: deckName || "New Deck",
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
    <BrowserRouter>
      <div>
        <header className="app-header">
          <h1>PTCG Deck Builder</h1>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="column column-deck-table">
                <DecksIndex decks={decks} onCreateDeck={handleCreateDeck} />
              </div>
            }
          />
          <Route path="/decks/:deckId" element={<DeckPage />} />
        </Routes>

        <footer className="app-footer">
          <p>&copy; 2025 PTCG Deck Builder</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
