import { COLOR } from "../config"

/**
 * Lose Screen
 * -
 */
export default function LoseScreen() {
  return (
    <div id="page" style={{ borderColor: COLOR.TRANSPARENT }}>
      {/* Score */}
      <div id="score">
        <img src="/lose.gif" />
      </div>

      <button onClick={() => location.reload()} style={{ background: COLOR.GOLDENROD, border: "1px solid #000", padding: "10px 20px", borderRadius: 10, margin: 10 }}>
        Play Again
      </button>
    </div>
  )
}
