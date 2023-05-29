import styled from "styled-components";
import { Color, Spaces } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  ${Spaces.SP1}
  display: flex;
  justify-content: space-between;
  padding: 28px 32px;
  box-sizing: border-box;
  background-color: ${Color.SECONDARY_BG};
`;

const Container = styled.div``;

const Logo = styled.img``;

export {StyledHeader, Container, Logo};