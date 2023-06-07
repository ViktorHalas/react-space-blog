import styled from "styled-components";
import { Media } from "ui";

const Wrapper = styled.div`
/* display: grid;
grid-template-rows: auto 1fr auto; 
min-height: 100vh;
width: 100%; */
`;
const MainContainer = styled.div`
  margin: 0 auto 72px auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  ${Media.XL}{
      padding: 0px 40px;
  };
  ${Media.SM}{
      padding: 0px 24px;
  };
`;

export {Wrapper, MainContainer};