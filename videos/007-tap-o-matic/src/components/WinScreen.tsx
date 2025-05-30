import { useEffect, useState } from "react"
import { COLOR } from "../config"
import useGameState from "../hooks/useGameState"

/**
 * Win Screen
 * -
 */
export default function WinScreen() {
  const { score } = useGameState()
  const [mod, setMod] = useState(0)

  // Keep the Party Going!
  useEffect(() => {
    const i = setInterval(() => setMod(Math.random()), 1000)
    return () => {
      clearInterval(i)
    }
  }, [])

  return (
    <div id="page" style={{ borderColor: COLOR.TRANSPARENT }}>
      {/* Score */}
      <div id="score">
        <img src="/win.gif" />
        <span key={`score-${mod}`} style={{ position: "absolute", animation: "tada", animationDuration: "1s" }}>{`HIGH SCORE: ${score}`}</span>
      </div>

      <button onClick={() => location.reload()} style={{ background: COLOR.GOLDENROD, border: "1px solid #000", padding: "10px 20px", borderRadius: 10, margin: 10 }}>
        Play Again
      </button>
    </div>
  )
}
