import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { deckId } = req.query;

  try {
    const deck = await prisma.deck.findUnique({
      where: {
        id: deckId,
      },
      include: {
        cards: true,
      },
    });

    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }

    res.status(200).json(deck);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch deck" });
  }
}
