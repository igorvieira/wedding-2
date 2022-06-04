import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Playfair Display', serif;
    background-color:  #f6f6f0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .map {
    width: 100%;
    height: 400px;
    border: 1px solid black;
  }

`

export default GlobalStyles