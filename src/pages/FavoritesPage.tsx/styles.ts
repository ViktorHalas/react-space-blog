import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const FavoritesWrapper = styled(motion.div)`
  place-self: start center;
  text-align: center;
`;

const Title = styled.h1`
  ${Spaces.SP3};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

const NoFavoritesText = styled.p`
  padding-bottom: 30px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE} !important;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;

const FavoritesList = styled.div``;

export { FavoritesWrapper, Title, FavoritesList, NoFavoritesText, StyledLink };