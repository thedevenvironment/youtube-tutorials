import { useEffect } from "react"
import useGameState from "./useGameState"
import { COLOR } from "../config"

/**
 * Game Screen
 * -
 */
export default function useKeepScore() {
  const { momentum, score, setScore, eventColor } = useGameState()

  useEffect(() => {
    if (eventColor === COLOR.GOLDENROD) setScore(score + 1)
    if (eventColor === COLOR.RED) setScore(score - 1)
  }, [eventColor])

  return { momentum, score }
}
