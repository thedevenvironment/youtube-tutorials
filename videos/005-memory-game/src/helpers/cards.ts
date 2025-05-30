export const symbols = ["🤡", "🤖", "🎃", "🧠", "👑", "🦄", "🍀", "🐲", "🦋", "❤️‍🔥"]

export function shuffleCards() {
  return [...symbols, ...symbols].sort(() => Math.random() - 0.5).map((symbol) => ({ status: "faceup", symbol }))
}
