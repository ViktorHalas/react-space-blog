import styled from "styled-components";
import { Color, Media, Spaces, Typography } from "ui";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
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

export {SearchPageContainer, Title, Pagination, StyledList};