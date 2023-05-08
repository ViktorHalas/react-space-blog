import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
  ${Reset};
  
  html {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    height:100%;
  }
`;