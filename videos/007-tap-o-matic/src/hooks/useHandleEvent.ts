import type { MouseEvent, KeyboardEvent } from "react"
import useGameState from "./useGameState"
import { DOTS } from "../config"

/**
 * Use Handle Event
 * -
 */
export default function useHandleEvent() {
  const { position, eventColor, setEventColor } = useGameState()

  // Handle Event
  const handleEvent = (e: MouseEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
    if ("key" in e && e.key !== " " && e.key !== "Enter") return false
    setEventColor(position === (DOTS - 1) / 2 ? "goldenrod" : "red")
    setTimeout(() => setEventColor("transparent"), 200)
  }

  return { eventColor, handleEvent }
}
