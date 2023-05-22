import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { themeDark, themeLight } from "./theme";

export const GlobalStyles = createGlobalStyle`
  ${Reset};
  
  html {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    height:100%;
  };

  html[theme=dark] {
    ${themeDark}
  };
  
  html[theme=light] {
    ${themeLight}
  };
`;