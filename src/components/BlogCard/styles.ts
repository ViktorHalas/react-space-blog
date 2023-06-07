import styled from "styled-components";
import { Color, Media, Spaces, Typography } from "ui";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
`;

const BlogImage = styled.img`
  width:100%;
  aspect-ratio: 1/0.59;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  padding: 32px;
  background-color: ${Color.SECONDARY_BG};
  ${Media.MD}{
    padding: 24px;
  }
`;

const Title = styled.div`
  ${Typography.H3};
  color:${Color.PRIMARY_TEXT};
`;

const PublishedAt = styled.p`
  ${Spaces.SP8};
  ${Typography.S1};
  color:${Color.SECONDARY_TEXT};
`;


export {CardContainer, BlogImage, TextContainer, Title, PublishedAt};