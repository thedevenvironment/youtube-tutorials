import logoImage from "../images/memory-logo.png"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #222;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  body {
    margin: 0;
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Logo = styled.div`
  background-image: url(${logoImage});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  width: 400px;
  margin-bottom: 20px;
`

export const CardContainer = styled.div`
  height: 481px;
  width: 505px;
  flex-wrap: wrap;
`
export const RestartButton = styled.button`
  background: #ff9a00;
  border: none;
  width: 200px;
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
`

export const cardstyling = `
  height: 100px;
  width: 75px;
  border-radius: 12px;
  border-width: 3px;
  border-style: solid;
  margin: 10px;
  font-size: 50px;
  border-color: violet;
  background-color: #FFF;
`
