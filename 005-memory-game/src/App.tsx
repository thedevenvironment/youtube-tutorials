import * as S from "./assets/styles/globalStyle"
import Card from "./components/Card"
import useCards from "./hooks/useCards"

/**
 * Game Component
 * -
 */
export default function Game() {
  const { cards, handleClick } = useCards()

  return (
    <>
      <S.Logo />
      <S.CardContainer>
        {cards.map((c, i) => {
          return <Card key={i} onClick={() => handleClick(i)} status={c.status} symbol={c.symbol} />
        })}
      </S.CardContainer>
      <S.RestartButton onClick={() => location.reload()}>{`RESTART ✓`}</S.RestartButton>
    </>
  )
}
