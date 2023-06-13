import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const DetailsPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const NavigationLink = styled.div`
  ${Spaces.SP5};
  color: ${Color.PRIMARY_TEXT};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover{
    color: ${Color.PRIMARY};
  }
`;

const Recommendations = styled.h2`
  ${Spaces.SP5};
  ${Typography.H2};
`;

export {NavigationLink,DetailsPageContainer, Recommendations};