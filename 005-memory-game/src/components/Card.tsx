import type { MouseEventHandler } from "react"
import styled from "styled-components"
import { cardstyling } from "../assets/styles/globalStyle"
import { Status } from "../helpers/cards"

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  status: Status
  symbol: string
}

/**
 * Card Component
 * -
 */
export default function Card({ onClick, status, symbol }: Props) {
  return (
    <S.Card key={`card-${status}`} status={status} id="front" onClick={onClick}>
      {status !== "back" ? symbol : ""}
    </S.Card>
  )
}

const S = {
  Card: styled.button<{ status: string }>`
    ${cardstyling}
    border-color: ${(p) => (p.status === "matched" ? "#FF9A00" : "violet")};
    background-color: ${(p) => (p.status !== "back" ? "#FFF" : "#AB0097")};
    animation: ${(p) => (p.status === "matched" ? "tada" : "flipInY")};
    animation-duration: 0.5s;
  `
}
