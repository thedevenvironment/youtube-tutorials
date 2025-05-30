import styled from 'styled-components'
import { KeyboardEventHandler, useEffect, useState } from 'react'
import generateText from '../helpers/generateText'

const regex = /^[a-z ]$/
export default function App() {
  const [paragraph] = useState(generateText())
  const [typed, setTyped] = useState('')
  const [startTime, setStartTime] = useState(0)
  const [wpm, setWpm] = useState(0)

  useEffect(() => {
    if (typed.length === paragraph.length) {
      const endTime = new Date().getTime()
      const wordsPerMinute = Math.round(paragraph.split(' ').length / ((endTime - startTime) / 1000 / 60))
      setWpm(wordsPerMinute)
    }
  }, [typed, paragraph, startTime, setWpm])

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (!typed.length) setStartTime(new Date().getTime())
    const key = e.key.toLowerCase()
    if (regex.test(key)) setTyped(typed + key)
    if (key === 'backspace') setTyped(typed.substring(0, typed.length - 1))
  }

  return (
    <S.Wrapper>
      {wpm > 0 && <S.Paragraph>{`WORDS PER MINUTE: ${wpm}`}</S.Paragraph>}
      <S.Paragraph>
        {paragraph.split('').map((letter, i) => (
          <S.Letter key={i} letter={letter} typed={typed[i]}>
            {letter}
          </S.Letter>
        ))}
      </S.Paragraph>
      <S.Input autoFocus onKeyDown={handleKeyDown} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Paragraph: styled.p`
    text-align: center;
    width: 80%;
  `,
  Input: styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    cursor: default;
  `,
  Letter: styled.span<{ letter: string; typed: string }>`
    background-color: ${(p) => (!p.typed ? '#555' : p.typed === p.letter ? 'goldenrod' : 'red')};
  `
}
