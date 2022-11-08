import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }

  button {
    text-align: center;
    cursor: pointer;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 2rem;
    margin-bottom: 15px;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`