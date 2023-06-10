import styled from "styled-components";
import { Color, Typography } from "ui";

const Label = styled.span`
  margin-right: 20px;
  ${Typography.B1};
  color: ${Color.BLACK_MEDIUM};
`;

const SwitcherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export {Label, SwitcherContainer};