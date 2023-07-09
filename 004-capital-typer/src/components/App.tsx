import { useState } from 'react'
import styled from 'styled-components'

export default function App() {
  const [stage, setStage] = useState<'start' | 'test' | 'result'>('start')

  if (stage === 'start') {
    return (
      <S.Wrapper>
        <S.Button onClick={() => setStage('test')}>Start</S.Button>
      </S.Wrapper>
    )
  }

  //
  // Write Code Here
  //
  if (stage === 'test') return ( 
    <S.Wrapper></S.Wrapper>
  )

  if (stage === 'result') {
    return (
      <S.Wrapper>
        <S.Paragraph>{`Score: ${20}`}</S.Paragraph>
      </S.Wrapper>
    )
  }
}

const S = {
  Wrapper: styled.div`
    flex: 1;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Button: styled.button`
    height: 40px;
    width: 200px;
    background-color: transparent;
    color: red;
    border: 1px solid red;
    border-radius: 10px;
  `,
  Paragraph: styled.p`
    font-family: Arial, Helvetica, sans-serif;
    width: 80%;
    font-size: 25px;
    color: #fff;
    text-align: center;
  `
}
