import styled from "styled-components";
import { Color, Spaces } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  ${Spaces.SP1}
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 32px;
  box-sizing: border-box;
  background-color: ${Color.SECONDARY_BG};
`;

const StyledNav = styled.div`
  display:grid;
  grid-template-columns:1fr auto;
  align-items: center;
  justify-content: end;
  gap:20px;
  width: 100%;
`;

const Logo = styled.img`
  align-self: center;
`;

export {StyledHeader, StyledNav, Logo};