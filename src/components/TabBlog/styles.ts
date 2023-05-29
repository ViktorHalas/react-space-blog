import styled from "styled-components";
import { Color } from "ui";

const Tab = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (
    isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY_BG}`)};

`;

export {Tab};