import * as S from "./assets/styles/globalStyle"
import Card from "./components/Card"
import useCards from "./hooks/useCards"
/**
 * Memory App
 * -
 */
export default function Game() {
  const { cards, handleClick } = useCards()

  return (
    <>
      <S.Logo />
      <S.CardContainer>
        {cards.map((c, i) => (
          <Card key={i} select={() => handleClick(i)} symbol={c.symbol} status={c.status} />
        ))}
      </S.CardContainer>
      <S.RestartButton onClick={() => location.reload()}>RESTART ✓</S.RestartButton>
    </>
  )
}
