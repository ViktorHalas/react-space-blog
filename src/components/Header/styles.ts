import styled from "styled-components";
import { Color, Spaces } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  ${Spaces.SP1}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  box-sizing: border-box;
  background-color: ${Color.SECONDARY_BG};
  z-index: 10;
`;

const Logo = styled.img`
  align-self: center;
`;
export {StyledHeader, Logo};