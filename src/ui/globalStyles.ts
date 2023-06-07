import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { themeDark, themeLight } from "./theme";
import { Color } from "./colors";




export const GlobalStyles = createGlobalStyle`
  ${Reset};
  body{
    min-height:100vh;
    background-color: ${Color.PRIMARY_BG};
  }

  html {
    font-family: 'Inter', sans-serif;
    font-style: normal;
  };

  html[theme=dark] {
  ${themeDark}
  };
  
  html[theme=light] {
     ${themeLight}
  };
`;