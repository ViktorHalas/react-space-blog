import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

export {SearchPageContainer, Title};