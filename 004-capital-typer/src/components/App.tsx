import styled from 'styled-components'
import { useEffect, useState } from 'react'
import getRandomWord from '../helpers/getRandomWord'

export default function App() {
  const [word, setWord] = useState(getRandomWord().split(''))
  const [text, setText] = useState<string[]>([])

  useEffect(() => {
    if (text.length === word.length) {
      setTimeout(() => Promise.all([setWord(getRandomWord().split('')), setText([])]), 500)
    }
  }, [text, word])

  useEffect(() => {
    const keyHandler = ({ key }: { key: string }) => {
      setText((currText) => key === word[currText.length] ? [...currText, key] : currText)
    }
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [word])

  return (
    <S.Page>
      <S.Word key={word.join('')}>
        {word.map((letter, i) => (
          <S.Letter highlight={(i < text.length).toString()} key={`${letter}-${i}`}>
            {letter}
          </S.Letter>
        ))}
      </S.Word>
    </S.Page>
  )
}

const S = {
  Page: styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #736b92;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  `,
  Word: styled.div`
    animation: 1s bounceIn;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    background-color: #736b92;
  `,
  Letter: styled.span<{ highlight: string }>`
    display: flex;
    border: 1px solid transparent;
    width: 50px;
    height: 80px;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-family: helvetica;
    color: #9593d9;
    letter-spacing: 2px;
    background-color: ${(p) => (p.highlight === 'true' ? '#E5BEED' : 'transparent')};
  `
}
