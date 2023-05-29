import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 16px;
  overflow: hidden;
`;

const BlogImage = styled.img`
  width:100%;
  aspect-ratio: 1/0.59;
`;

const TextContainer = styled.div`
  padding: 32px;
  box-sizing: border-box;
  background-color: ${Color.SECONDARY_BG};
`;

const Title = styled.div`
  ${Typography.H3};
  color:${Color.PRIMARY_TEXT};
`;

const PublishedAt = styled.p`
  ${Typography.S1};
  color:${Color.SECONDARY_TEXT};
  ${Spaces.SP8};
`;


export {CardContainer, BlogImage, TextContainer, Title, PublishedAt};