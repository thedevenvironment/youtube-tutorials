import type { Dispatch, SetStateAction } from "react"

interface Props {
  setGameStatus: Dispatch<SetStateAction<string>>
}

/**
 * Start Screen
 * -
 */
export default function StartScreen({ setGameStatus }: Props) {
  return (
    <div id="page" style={{ borderColor: "transparent" }}>
      <div id="menu-box">
        <h1>Tap-O-Matic!</h1>
        <span style={{ fontSize: 12 }}>• The ball moves along the track.</span>
        <br />
        <span style={{ fontSize: 12 }}>• When the ball is inside the target, press "Spacebar" or "Enter" / Tap the screen.</span>
        <br />
        <span style={{ fontSize: 12 }}>• If you hit at the right time, you earn a point.</span>
        <br />
        <span style={{ fontSize: 12 }}>• If you miss, Game Over.</span>
        <br />
        <button onClick={() => setGameStatus("playing")} style={{ background: "#FFF", border: "1px solid #000", padding: "10px 20px", borderRadius: 10, margin: 10 }}>
          Start Game!
        </button>
      </div>
    </div>
  )
}
