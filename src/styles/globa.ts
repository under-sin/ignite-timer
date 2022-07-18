import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme["green-500"]};
  }

  body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
