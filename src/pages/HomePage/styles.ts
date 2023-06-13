import styled from "styled-components";
import { Color, Media, Spaces, Typography } from "ui";

const Title = styled.h2`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const TabBlogContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

const Pagination = styled.button`
  width: 100%;
  margin-top: 48px;
  padding: 10px;
  ${Typography.H3};
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.BLOCK_BG};
  border-color: ${Color.PRIMARY_TEXT};
  border-radius: 6px;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 40px;
  margin: 0 auto;
  ${Media.LG}{
    grid-template-columns: repeat(2, 1fr);
  }
  ${Media.MD}{
    grid-template-columns: 1fr;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  ${Spaces.SP3};
  border-bottom: 3px solid ${Color.GREY};
  ${Media.SM}{
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export {HomePageContainer, TabBlogContainer, Title, Pagination, StyledList, ButtonsContainer};