import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const Title = styled.h2`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

const HomePageContainer = styled.div`
    height: 100%;
    width: 100%;
`;
const TabBlogWrapper = styled.div``;

export {HomePageContainer, TabBlogWrapper, Title};