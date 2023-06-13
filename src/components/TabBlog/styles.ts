import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const Tab = styled.button<{ isActive: boolean }>`
  min-width: 120px;
  width: 100%;
  padding: 10px 20px;
  ${Typography.H3};
  background-color: transparent;
  border: none;
  border-bottom: solid ${({ isActive }) => (
    isActive ? `4px ${Color.PRIMARY}` : `0px ${Color.SECONDARY_BG}`)};
  ${Media.SM}{
    min-width:0px;
  }
`;

export {Tab};