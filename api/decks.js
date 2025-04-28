import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const decks = await prisma.deck.findMany({
      include: {
        cards: true,
      },
    });
    res.status(200).json(decks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch decks" });
  }
}
