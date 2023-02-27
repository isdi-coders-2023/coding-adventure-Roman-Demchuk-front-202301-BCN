import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
      }

    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        background-color: #1E1E1E;
        color: #fff
      }

  h1, h2 {
      margin: 0;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a, a:active, a:visited { 
      color: inherit;
      text-decoration: none;
    }

    button {
      font-family: inherit;
      border: none;
      font-size: inherit;
      background-color: transparent;
      cursor: pointer;
    };
`;

export default GlobalStyles;
