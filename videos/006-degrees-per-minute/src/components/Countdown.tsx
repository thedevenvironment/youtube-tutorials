import { useMemo } from 'react'

interface Props {
  size: number
  timeRemaining: number
  totalTime: number
}

export default function Countdown({ size = 200, timeRemaining, totalTime }: Props) {
  const ring = useMemo(() => size / 10, [size])
  const xy = useMemo(() => size / 2, [size])
  const radius = useMemo(() => (size - ring) / 2, [size, ring])
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius])
  const offset = useMemo(() => (timeRemaining / totalTime) * circumference, [totalTime, timeRemaining, circumference])

  return (
    <>
      <svg height={size} width={size}>
        <circle
          cx={xy}
          cy={xy}
          r={radius}
          stroke='#dd2353'
          strokeWidth={ring}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offset}
          strokeLinecap='round'
          fill='transparent'
        />
      </svg>
      <span style={{ fontSize: size / 2, position: 'absolute', fontWeight: '900', color: '#dd2353'}}>
        {timeRemaining}
      </span>
    </>
  )
}
