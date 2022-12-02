import useTime from './useTime'
import * as S from './styles'

export default function Clock() {
  const time = useTime()

  return (
    <S.Wrapper>
      <S.Clock>
        <S.HourHand rotation={time.hours} />
        <S.MinuteHand rotation={time.minutes} />
        <S.SecondHand rotation={time.seconds} />
      </S.Clock>
    </S.Wrapper>
  )
}
