import styled from "styled-components";
import { Color, Media, Spaces, Typography } from "ui";

const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${Spaces.SP1};
`;
const Title = styled.h2`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

const Image = styled.img`
  width: 100%;
  ${Spaces.SP3};
  aspect-ratio: 13/6;
  border-radius: 16px;

  ${Media.LG}{
    aspect-ratio: 1/0.522;
  };

  ${Media.SM}{
    aspect-ratio: 1/0.897;
  }
`;
const Summary = styled.p`
  ${Spaces.SP5};
  ${Typography.B1};
  color: ${Color.PRIMARY_TEXT};
`;
const OuterLink = styled.a`
  display: block;
  padding: 16px 32px;
  width: fit-content;
  ${Typography.H3};
  text-decoration: none;
  color: ${Color.PRIMARY_TEXT};
  border: 2px solid ${Color.PRIMARY_TEXT};
  transition: 0.3s ease;
  cursor: pointer;
  &:hover{
    color: ${Color.PRIMARY};
    border-color: ${Color.PRIMARY};
  }
`;

export {BlogContentContainer,Title, Image, Summary, OuterLink};
