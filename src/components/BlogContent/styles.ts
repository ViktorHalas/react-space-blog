import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, Spaces, Typography } from "ui";

const BlogContentContainer = styled(motion.div)`
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
  padding: 10px 15px;
  width: fit-content;
  ${Typography.H3};
  line-height: 40px;
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

const FavoritesButton = styled.button`
min-width: 80px;
  padding: 10px 15px;
  ${Typography.H2};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;


export {BlogContentContainer,Title, Image, Summary, OuterLink, FavoritesButton, ButtonsContainer};
