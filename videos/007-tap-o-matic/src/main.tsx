import "animate.css"
import { createRoot } from "react-dom/client"
import GameScreen from "./components/GameScreen"
import StartScreen from "./components/StartScreen"
import WinScreen from "./components/WinScreen"
import LoseScreen from "./components/LoseScreen"
import { useState } from "react"

/**
 * Tap-O-Matic Game
 * -
 */
export default function Tapomatic() {
  const [gameStatus, setGameStatus] = useState("")

  if (gameStatus === "win") return <WinScreen />
  else if (gameStatus === "lose") return <LoseScreen />
  else if (gameStatus === "playing") return <GameScreen setGameStatus={setGameStatus} />
  else return <StartScreen setGameStatus={setGameStatus} />
}

createRoot(document.getElementById("root")!).render(<Tapomatic />)
