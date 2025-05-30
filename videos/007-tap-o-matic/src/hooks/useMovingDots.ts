import { useEffect, useRef } from "react"
import { COLOR, SPEED, TICK, DOTS } from "../config"
import useGameState from "./useGameState"

/**
 * Use Moving Dots
 * -
 */
export default function useMovingDots() {
  const { direction, position, score, setPosition, setDirection } = useGameState()
  const directionRef = useRef<"right" | "left">(direction)
  const positionRef = useRef<number>(position)
  const scoreRef = useRef(score)
  const tick = useRef(0)

  // Handle Change Position
  const handleChangePosition = () => {
    tick.current = 0

    if (directionRef.current === "right") {
      positionRef.current += 1
    } else {
      positionRef.current -= 1
    }

    // If At End Point(s)
    if (positionRef.current === 0 || positionRef.current === DOTS - 1) {
      setDirection(positionRef.current ? "left" : "right")
    }

    // Update Global Position
    setPosition(positionRef.current)
  }

  // Handle Tick
  const handleTick = () => {
    tick.current += TICK
    if (tick.current >= SPEED[scoreRef.current as keyof typeof SPEED]) {
      handleChangePosition()
    }
  }

  // Fill Dot
  const fillDot = (pos: number) => {
    return position === pos ? COLOR.GOLDENROD : COLOR.TRANSPARENT
  }

  // Interval Use Effect
  useEffect(() => {
    const i = setInterval(handleTick, TICK)
    return () => {
      clearInterval(i)
    }
  }, [])

  // Listen for Score Changes
  useEffect(() => {
    scoreRef.current = score
  }, [score])

  // Listen for Direction Changes
  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  return { fillDot, position }
}
