import { useState, useRef, useEffect } from "react"
import getCards from "../helpers/cards"

/**
 * Use Cards Hook
 */
export default function useCards() {
  const [cards, setCards] = useState(getCards())
  const lastCard = useRef(-1)
  const disable = useRef(true)

  /**
   * Display Cards
   * -
   */
  useEffect(() => {
    setTimeout(() => {
      setCards((current) => [...current].map((c) => ({ ...c, status: "back" })))
      disable.current = false
    }, 3000)
  }, [setCards])

  /**
   * Handle Click
   * -
   */
  const handleClick = (i: number) => {
    if (!disable.current) {
      const newCards = cards
      const card1 = newCards[lastCard.current]
      const card2 = newCards[i]
      card2.status = "front"
      setCards([...newCards])

      // No Last Card
      if (lastCard.current === -1) lastCard.current = i

      if (card1) {
        // Symbols Match
        if (card1.symbol === card2.symbol) {
          card1.status = "matched"
          card2.status = "matched"
          lastCard.current = -1
          return setCards([...newCards])
        }

        // Mismatch
        else {
          disable.current = true
          return setTimeout(() => {
            card1.status = "back"
            card2.status = "back"
            lastCard.current = -1
            setCards([...newCards])
            disable.current = false
          }, 750)
        }
      }
    }
  }

  return { cards, handleClick }
}
