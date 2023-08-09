import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
  }

  ol, ul, li {
    list-style: none;
  }
  
  button {
    border: 0;
    outline: 0;
  }
`;
