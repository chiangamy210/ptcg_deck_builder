import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log("Request to /api/createDeck", req.url);
  console.log("Request headers:", req.headers); // Log request headers
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  const { name } = req.body;
  try {
    const newDeck = await prisma.deck.create({ data: { name } });
    return res.status(200).json(newDeck);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Create deck failed" });
  }
}
