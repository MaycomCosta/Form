import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: #0f2637;
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  #root {
    width: 100%;
  }
`
