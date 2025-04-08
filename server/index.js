const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 測試 API
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// 建 deck 的 API
app.post("/api/decks", async (req, res) => {
  const { name, cards } = req.body;
  try {
    const newDeck = await prisma.deck.create({
      data: {
        name,
        cards,
      },
    });
    res.json(newDeck);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "deck build fail" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
