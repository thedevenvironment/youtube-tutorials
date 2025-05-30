import { create } from "zustand"
import { devtools } from "zustand/middleware"

type Direction = "left" | "right"
type EventColor = "goldenrod" | "red" | "transparent" | "aqua"

interface GameStore {
  direction: Direction
  momentum: boolean
  position: number
  score: number
  eventColor: EventColor
  setDirection: (direction: Direction) => void
  setPosition: (position: number) => void
  setScore: (score: number) => void
  setEventColor: (color: EventColor) => void
}

export default create<GameStore>()(
  devtools((set) => ({
    direction: "right",
    momentum: true,
    position: 0,
    score: 0,
    eventColor: "transparent",
    setDirection: (direction: Direction) => set(() => ({ direction })),
    setPosition: (position: number) => set(() => ({ position })),
    setScore: (score: number) => set((state: GameStore) => ({ score, momentum: state.score < score })),
    setEventColor: (eventColor: EventColor) => set(() => ({ eventColor })),
  }))
)
