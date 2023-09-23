import "animate.css"
import ReactDOM from "react-dom/client"
import { StyleSheetManager } from "styled-components"
import isPropValid from "@emotion/is-prop-valid"
import Game from "./App"
import { GlobalStyle } from "./assets/styles/globalStyle"

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <GlobalStyle />
    <Game />
  </StyleSheetManager>
)
