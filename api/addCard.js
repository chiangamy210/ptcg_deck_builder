import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  const { deckId, cardId, quantity } = req.body;

  try {
    const updatedDeck = await prisma.cardInDeck.create({
      data: {
        deckId,
        cardId,
        quantity,
      },
    });

    return res.status(200).json(updatedDeck);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Add card to deck failed" });
  }
}
