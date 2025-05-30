import type { MouseEventHandler } from "react"
import styled from "styled-components"
import { cardstyling } from "../assets/styles/globalStyle"

interface Props {
  select?: MouseEventHandler<HTMLButtonElement>
  status: string //
  symbol: string
}

/**
 * Card Component
 * -
 */
export default function Card({ select, status, symbol }: Props) {
  return (
    <S.Card key={`card-${status}`} onClick={select} status={status}>
      {status !== "facedown" ? symbol : ""}
    </S.Card>
  )
}

const S = {
  Card: styled.button<{ status: string }>`
    ${cardstyling}
    border-color: ${(p) => (p.status === "matched" ? "#FF9A00" : "violet")};
    background-color: ${(p) => (p.status === "facedown" ? "#AB0097" : "#FFF")};
    animation: ${(p) => (p.status === "matched" ? "tada" : "flipInY")};
    animation-duration: 1s;
  `
}
