import { useEffect, useState } from 'react'

export default function useTime() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setHours(Math.floor((date.getHours() / 24)))
      setMinutes(Math.floor((date.getMinutes() / 60) * 360))
      setSeconds(Math.floor((date.getSeconds() / 60) * 360))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return { hours, minutes, seconds }
}
