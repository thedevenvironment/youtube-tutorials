import type { Dispatch, SetStateAction } from "react"
import { COLOR, DOTS } from "../config"
import useHandleEvent from "../hooks/useHandleEvent"
import useMovingDots from "../hooks/useMovingDots"
import useKeepScore from "../hooks/useKeepScore"
import { useEffect } from "react"

interface Props {
  setGameStatus: Dispatch<SetStateAction<string>>
}

/**
 * Game Screen
 * -
 */
export default function GameScreen({ setGameStatus }: Props) {
  const { momentum, score } = useKeepScore()
  const { fillDot } = useMovingDots()
  const { handleEvent, eventColor } = useHandleEvent()

  useEffect(() => {
    if (!momentum && score >= 5) setGameStatus("win")
    if (!momentum && score < 5) setGameStatus("lose")
  }, [score])

  return (
    <div id="page" style={{ borderColor: eventColor }}>
      {/* Triangle */}
      <div id="triangle">
        {/* Dot Block */}
        <div id="dot-block">
          {Array.from({ length: DOTS }, (_, i) => (
            <div className="circle" style={{ borderColor: i === (DOTS - 1) / 2 ? COLOR.AQUA : COLOR.GOLDENROD, background: fillDot(i) }} />
          ))}
        </div>

        {/* Score */}
        <div id="score">
          <span key={`score-${score}`} style={{ animation: momentum ? "swing" : "shakeX", animationDuration: ".5s" }}>{`SCORE: ${score}`}</span>
        </div>
      </div>

      {/* Key Listener */}
      <input id="key-listener" onClick={handleEvent} onKeyDown={handleEvent} autoFocus />
    </div>
  )
}
