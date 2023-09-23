import { useEffect, useRef, useState } from "react"
import { shuffleCards } from "../helpers/cards"

export default function useCards() {
  const [cards, setCards] = useState(shuffleCards())
  const disable = useRef(true)
  const prevIndex = useRef(-1)

  useEffect(() => {
    setTimeout(() => {
      setCards((prevCards) => [...prevCards].map((c) => ({ ...c, status: "facedown" })))
      disable.current = false
    }, 3000)
  }, [])

  const updateCardStatus = (cardArr: { status: string; symbol: string }[], status: string) => {
    cardArr.forEach((card) => (card.status = status))
    setCards([...cards])
  }

  const handleClick = (i: number) => {
    // 1. If Disabled Return
    if (disable.current) return

    // 2. Cache Cards
    const currCard = cards[i]
    const prevCard = cards[prevIndex.current]

    // // 8. If Selected Card Is Already Matched
    if (currCard.status === "matched") return

    // 3. Update Flipped Card
    updateCardStatus([currCard], "faceup")

    // 4. If Only Card, Update PrevIndex
    if (!prevCard || prevIndex.current === i) {
      prevIndex.current = i
      return
    }

    // 5. If card symbols match
    if (currCard.symbol === prevCard.symbol) {
      updateCardStatus([currCard, prevCard], "matched")
    }

    // 6. Cards don't match
    else {
      disable.current = true
      setTimeout(() => {
        updateCardStatus([currCard, prevCard], "facedown")
        disable.current = false
      }, 1000)
    }

    // 7. Reset Index
    prevIndex.current = -1
  }

  return { cards, handleClick }
}
