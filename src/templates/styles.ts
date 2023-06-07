import styled from "styled-components";
import { Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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