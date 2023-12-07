import { useState } from 'react'
import styled from 'styled-components'
import { grid, positions } from './helpers'

export default function App() {
  const [position, setPosition] = useState<number>(-1)
  const [score, setScore] = useState(0)
  const [speed, setSpeed] = useState(500)

  const handleStart = () => {
    if (position !== -1) return
    setPosition(0)
    setInterval(() => {
      setPosition((p) => (p < positions.length - 2 ? p + 1 : 0))
    }, speed)
  }

  const handleTap = (coords: string) => {
    if (positions[position] === coords) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }

  return (
    <S.Wrapper>
      <>
        {position === -1 && <S.StartButton onClick={handleStart}>START</S.StartButton>}
        {grid.map((x, xi) => (
          <S.Row key={`x-${xi}`}>
            {x.map((y, yi) => {
              const circle = positions[position] === `${xi},${yi}` ? 'O' : grid[xi][yi] === 'o' ? 'o' : 'x'
              return xi === 4 && (yi === 0 || yi === 2) ? (
                <S.ButtonBox key={`btn-${yi}`} onClick={() => handleTap(`${xi},${yi}`)} circle={circle} />
              ) : (
                <S.Box key={`y-${yi}`} circle={circle} />
              )
            })}
          </S.Row>
        ))}
      </>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  StartButton: styled.button`
    position: absolute;
    z-index: 2000;
    height: 50px;
    width: 250px;
    border: none;
    border-radius: 40px;
    font-weight: 900;
    background-color: green;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  `,
  Row: styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
  `,
  Box: styled.div<{ circle: string }>`
    height: 100px;
    width: 100px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      height: 75px;
      width: 75px;
      border: 2px solid violet;
      border-radius: 50%;
      background-color: ${(p) => (p.circle === 'O' ? 'violet' : 'transparent')};
      display: ${(p) => (p.circle === 'x' ? 'none' : 'flex')};
    }
  `,
  ButtonBox: styled.button<{ circle: string }>`
    height: 100px;
    width: 100px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      height: 75px;
      width: 75px;
      border: 2px solid blueviolet;
      border-radius: 50%;
      background-color: ${(p) => (p.circle === 'O' ? 'violet' : 'transparent')};
      display: ${(p) => (p.circle === 'x' ? 'none' : 'flex')};
    }
  `
}
