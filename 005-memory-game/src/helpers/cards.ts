export type Status = "back" | "front" | "matched"

export interface Card {
  status: Status
  symbol: string
}

const symbols = ["🤡", "🤖", "🎃", "🧠", "👑", "🦄", "🍀", "🐲", "🦋", "❤️‍🔥"]

export default function getCards(): Card[] {
  return [...symbols, ...symbols].sort(() => Math.random() - 0.5).map((symbol) => ({ status: "front", symbol }))
}
