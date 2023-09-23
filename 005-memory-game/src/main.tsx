import "animate.css"
import isPropValid from "@emotion/is-prop-valid"
import { StyleSheetManager } from "styled-components"
import ReactDOM from "react-dom/client"
import Game from "./App"
import { GlobalStyle } from "./assets/styles/globalStyle"

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <Game />
    </StyleSheetManager>
  </>
)
