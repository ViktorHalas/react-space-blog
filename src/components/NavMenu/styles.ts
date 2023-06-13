import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledNav = styled(motion.div)`
  display:grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  justify-content: end;
  gap:20px;
  width: 100%;
  ${Media.SM} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(5, auto) 1fr;
    align-items: center;
    justify-items: center;
    gap: 30px;
    width: 100%;
    height: 100vh;
    padding: 43px 30px;
    background-color: ${Color.SECONDARY_BG};
  };
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  ${Typography.H2};
  color: ${Color.PRIMARY_TEXT};
`;

const FavoritesLink = styled(Link)`
  ${Typography.H3};
  color:${Color.PRIMARY_TEXT};
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export {StyledNav, SearchContainer, Title, TitleContainer, FavoritesLink};

