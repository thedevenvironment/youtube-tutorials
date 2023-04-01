import styled from 'styled-components'

interface Props {
  result: string[]
}

export default function BreakingLogo({ result }: Props) {
  return (
    <S.Wrapper>
      <span>{result[0]}</span>
      {result[1] && <S.Element>{result[1]}</S.Element>}
      <span>{result[2]}</span>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > span {
      font-size: 75px;
    }
  `,
  Element: styled.div`
    height: 100px;
    background-color: #0f5135;
    aspect-ratio: 1;
    color: #fff;
    font-size: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}
