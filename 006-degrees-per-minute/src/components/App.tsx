import { useState, useEffect } from 'react'
import Countdown from './Countdown'

const TIME = 30

export default function App() {
  const [seconds, setSeconds] = useState(TIME)

  useEffect(() => {
    const i = setInterval(() => {
      setSeconds((s) => {
        if (s > 0) return s - 1
        clearInterval(i)
        return 0
      })
    }, 1000)

    return () => {
      clearInterval(i)
    }
  }, [])

  return <Countdown size={100} timeRemaining={seconds} totalTime={TIME} />
}
