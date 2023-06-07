import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { themeDark, themeLight } from "./theme";
import { Color } from "./colors";




export const GlobalStyles = createGlobalStyle`
  ${Reset};
  body{
    height:100%;
    background-color: ${Color.PRIMARY_BG};
  }

  html {
    height:100%;
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